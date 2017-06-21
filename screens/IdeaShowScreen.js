import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    Animated,
    PanResponder
} from 'react-native';
import {
    Container,
    Content,
    Text,
    H1,
    H2,
    Icon,
    Button
} from 'native-base';
import {LinearGradient, AppLoading} from 'expo';
import {showIdea} from '../actions/idea';
import {likeViewEditIdea} from '../actions/idea'

const {width, height} = Dimensions.get('window');

class IdeaShowScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '許願池',
        tabBarIcon: ({tintColor}) => <Icon style={{
                color: tintColor,
                fontSize: 24
            }} name='gift'/>
    };

    constructor(props) {
        super(props);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: (event, gesture) => {
                Animated.timing(this.position, {
                    toValue: 1,
                    duration: 200,
                }).start();
            },
            onPanResponderRelease: (event, gesture) => {
                this.handleLike();
                Animated.timing(this.position, {
                    toValue: 2,
                    duration: 200,
                }).start(() => {
                    this.position.setValue(0);
                });
            }
        });

        this.position = new Animated.Value(0);
        this.handleLike = this.handleLike.bind(this);
    }

    componentWillMount() {
        this.props.showIdea(this.props.navigation.state.params.i_id);
    }

    handleLike() {
        this.props.likeViewEditIdea(this.props.navigation.state.params.i_id);
    }

    getStyle() {
        return ({
            transform: [
                {
                    scale: this.position.interpolate({
                        inputRange: [
                            0, 1, 2
                        ],
                        outputRange: [
                            1, 0.8, 1
                        ],
                        extrapolate: 'clamp'
                    })
                }
            ]
        });
    }

    render() {
        if (!this.props.ideaShow) {
            return <AppLoading/>
        }
        const {
            picture_url,
            idea_type,
            skill,
            goal,
            like_number,
            liked,
            image_url,
            name
        } = this.props.ideaShow;
        const {bannerBackground, bannerTitle, authorContainer, authorImage, likeContainer} = styles;
        return (
            <View style={{
                flex: 1
            }}>
                <Image style={{
                    position: 'relative',
                    resizeMode: 'cover',
                    height: '100%',
                    width: '100%'
                }} source={{
                    uri: image_url
                        ? image_url
                        : 'https://placeholdit.imgix.net/~text?w=900&h=600'
                }}/>
                <View style={bannerBackground}/>
                <View style={bannerTitle}>
                    <Text style={{
                        color: 'white',
                        fontSize: 30,
                        marginBottom: 8
                    }}>{`${idea_type === 'teach'
                            ? '我想教'
                            : '我想學'}${skill}`}</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        lineHeight: 24
                    }}>{`希望可以${goal}`}</Text>
                </View>
                <View style={likeContainer}>
                    <Animated.View style={this.getStyle()} {...this.panResponder.panHandlers}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: 'white'
                        }}>
                            <Icon name="heart" style={{
                                color: liked
                                    ? '#FF5964'
                                    : '#A4A9AD'
                            }}/>
                        </View>
                    </Animated.View>
                    <Text style={{
                        color: 'white',
                        marginLeft: 10,
                        fontSize: 20
                    }}>{`${like_number} 人喜歡`}</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: 64,
                    position: 'absolute',
                    top: 20,
                    padding: 20,
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image style={authorImage} source={{
                            uri: picture_url
                        }}/>
                        <Text style={{
                            color: 'white',
                            marginLeft: 10,
                            fontSize: 20
                        }}>{name}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name="close" style={{
                            fontSize: 24,
                            color: 'white'
                        }}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showIdea,
        likeViewEditIdea
    }, dispatch);
}
function mapStateToProps({ideaShow}) {
    return {ideaShow}
}
export default connect(mapStateToProps, mapDispatchToProps)(IdeaShowScreen);

const styles = {
    bannerBackground: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute'
    },
    bannerTitle: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: 10
    },
    authorContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        top: 40,
        left: 20
    },
    authorImage: {
        height: 36,
        width: 36,
        borderRadius: 18
    },
    likeContainer: {
        position: 'absolute',
        left: 20,
        bottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
};
