import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert
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
import {LinearGradient} from 'expo';
import {showIdea} from '../actions/idea';

const {width, height} = Dimensions.get('window');

class IdeaShowScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '許願池',
        tabBarIcon: ({tintColor}) => <Icon style={{
                color: tintColor,
                fontSize: 24
            }} name='gift'/>
    };
    constructor(props){
        super(props);

        this.state = {
            picture_url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18622427_1859238271067164_3869120362467491071_n.jpg?oh=681ac9d57e2917e97ce9d25f027b76d4&oe=59D96830",
            idea_type: 'teach',
            skill:'a' ,
            goal:'a' ,
            like_number:'9487',
            liked:true
        }
    }
    componentWillMount(){
        console.log(this.props.navigation)
        this.props.showIdea(this.props.navigation.state.params.i_id);
        
    }
    handleLike(e) {
        Alert.alert('Like has been pressed.',);
        e.stopPropagation();
        //this.props.likeSearchIdea(this.props.i_id);

    }
    render() {
        console.log("show screen")
        console.log(this.props.ideaShow);
        const { picture_url, idea_type, skill, goal, like_number, liked, image_url, name}=this.props.ideaShow? this.props.ideaShow:this.state;
        const {
            bannerBackground,
            bannerTitle,
            authorContainer,
            authorImageContainer,
            authorImage,
            likeContainer
        } = styles;
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
                    uri: image_url? image_url:'https://image.ibb.co/h1ue55/8KfJCHZ.jpg'
                }}/>
                <View style={bannerBackground}/>
                <View style={bannerTitle}>
                    <Text style={{
                        color: 'white',
                        fontSize: 30,
                        lineHeight: 36,
                        marginBottom: 8
                    }}>{`${idea_type==='teach'?'我想教':'我想學'}${skill}`}</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        lineHeight: 24
                    }}>{goal}</Text>
                </View>
                <View style={likeContainer}>
                    <Button danger rounded onPress={(e) => this.handleLike(e)}>
                        <Icon name="heart"/>
                    </Button>
                    <Text style={{
                        color: 'white',
                        marginLeft: 10,
                        fontSize: 20
                    }}>{`${like_number}人喜歡`}</Text>
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
                        <View style={authorImageContainer}>
                            <Image style={authorImage} source={{
                                uri: picture_url
                            }}/>
                        </View>
                        <Text style={{
                            color: 'white',
                            marginLeft: 10,
                            fontSize: 24
                        }}>{name}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name="close" style={{
                            color: 'white'
                        }}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
IdeaShowScreen.defaultProps = {
    goal:"b",
    i_id:8,
    idea_type:"learn",
    like_number:0,
    name:"賴詰凱",
    picture_url:"https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18622427_1859238271067164_3869120362467491071_n.jpg?oh=681ac9d57e2917e97ce9d25f027b76d4&oe=59D96830",
    skill:"a",
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showIdea,
    }, dispatch);
}
function mapStateToProps({ ideaShow }) {
    return {
        ideaShow,
    }
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
    authorImageContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 2
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
