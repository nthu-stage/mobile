import React, {Component} from 'react';
import {Video, Asset, AppLoading} from 'expo';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Container, Content, Text, Icon, Button} from 'native-base';

const videoSource = require('../assets/video/auth.mp4');
const {width, height} = Dimensions.get('window');

export default class AuthScreen extends Component {
    constructor(props) {
        super(props);

        this.mountVideo = this.mountVideo.bind(this);
        this.onPressLogin = this.onPressLogin.bind(this);
        this.state = {
            loading: null
        }
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
        this.props.navigation.navigate('workshopStack')
    }

    render() {
        const {
            titleContainer,
            text,
            logo,
            title,
            loginContainer,
            loginButton,
            loginText
        } = styles;
        return (
            <Container>
                <Video style={{
                    width,
                    height
                }} ref={this.mountVideo} resizeMode={Video.RESIZE_MODE_COVER}/>
                <Content style={titleContainer}>
                    <Icon style={{
                        ...text,
                        ...logo
                    }} name="cubes"/>
                    <Text style={{
                        ...text,
                        ...title
                    }}>NTHU Stage</Text>
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
