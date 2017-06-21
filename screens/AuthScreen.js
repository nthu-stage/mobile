import React, {Component} from 'react';
import {Video, Asset, Font, AppLoading} from 'expo';
import {View, StyleSheet, Dimensions, AsyncStorage} from 'react-native';
import {Container, Content, Text, Icon, Button} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {facebookLogin} from '../actions/auth';
const videoSource = require('../assets/video/auth.mp4');
const {width, height} = Dimensions.get('window');

class AuthScreen extends Component {
    constructor(props) {
        super(props);

        // AsyncStorage.removeItem('fb');

        this.mountVideo = this.mountVideo.bind(this);
        this.onPressLogin = this.onPressLogin.bind(this);
        this.state = {
            loading: null,
            fontLoading: true,
        }
    }

    async componentDidMount() {
        this.props.facebookLogin(false);
        this.onAuthComplete(this.props);
        await Font.loadAsync({'Aldrich': require('../assets/fonts/Aldrich-Regular.ttf')});
        this.setState({fontLoading: false});
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    async loadNewPlaybackInstance() {
        await this.video.loadAsync(videoSource, {
            shouldPlay: true,
            isLooping: true
        });
        this.setState({loading: false});
    }

    mountVideo(component) {
        this.video = component;
        this.setState({loading: true});
        this.loadNewPlaybackInstance();
    }

    onPressLogin() {
        this.props.facebookLogin(true);
        this.onAuthComplete(this.props);
    }

    onAuthComplete(props) {
        if (props.accessToken) {
            this.props.navigation.navigate('workshopStack');
        }
    }

    render() {
        const {loading, fontLoading} = this.state;
        const {
            titleContainer,
            text,
            logo,
            loginContainer,
            loginButton,
            loginText
        } = styles;
        return (
            <Container>
                {loading && fontLoading && <AppLoading/>}
                <Video style={{
                    width,
                    height
                }} ref={this.mountVideo} resizeMode={Video.RESIZE_MODE_COVER}/>
                <Content style={titleContainer}>
                    <Icon style={{
                        ...text,
                        ...logo
                    }} name="cubes"/>
                    {!fontLoading && <Text style={{
                        ...text,
                        ...styles.title
                    }}>NTHU Stage</Text>}
                </Content>
                <Content style={loginContainer}>
                    <Button onPress={this.onPressLogin} style={loginButton} block>
                        <Text style={loginText}>Login with Facebook</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = {
    titleContainer: {
        width: '100%',
        position: 'absolute',
        marginTop: height * 0.15
    },
    text: {
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: {
            width: 1,
            height: 1
        },
        textShadowRadius: 2
    },
    logo: {
        fontSize: 60,
        marginBottom: 20
    },
    title: {
        fontFamily: 'Aldrich',
        fontSize: 42,
        fontWeight: 'bold'
    },
    loginContainer: {
        width: '100%',
        position: 'absolute',
        padding: 20,
        marginTop: height * 0.75
    },
    loginButton: {
        backgroundColor: 'white'
    },
    loginText: {
        color: 'black',
        fontWeight: 'bold'
    }
};

function mapStateToProps({auth}) {
    return {accessToken: auth.accessToken};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        facebookLogin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
