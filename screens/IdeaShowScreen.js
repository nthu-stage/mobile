import React, {Component} from 'react';
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
const {width, height} = Dimensions.get('window');

class IdeaShowScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '許願池',
        tabBarIcon: ({tintColor}) => <Icon style={{
                color: tintColor,
                fontSize: 24
            }} name='gift'/>
    };
    componentWillMount(){
        this.props.showIdea(this.props.navigation.state.params.i_id);
    }
    handleLike(e) {
        Alert.alert('Like has been pressed.',);
        e.stopPropagation();
        //this.props.likeSearchIdea(this.props.i_id);

    }
    render() {
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
                    uri: 'https://image.ibb.co/h1ue55/8KfJCHZ.jpg'
                }}/>
                <View style={bannerBackground}/>
                <View style={bannerTitle}>
                    <Text style={{
                        color: 'white',
                        fontSize: 30,
                        lineHeight: 36,
                        marginBottom: 8
                    }}>我想學畫畫</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        lineHeight: 24
                    }}>初階人像攝影工作坊，從基本觀念、拍攝所需至燈光運用，完整流程深入淺出一次瞭解。</Text>
                </View>
                <View style={likeContainer}>
                    <Button danger rounded onPress={(e) => this.handleLike(e)}>
                        <Icon name="heart"/>
                    </Button>
                    <Text style={{
                        color: 'white',
                        marginLeft: 10,
                        fontSize: 20
                    }}>31 人喜歡</Text>
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
                                uri: 'https://image.ibb.co/h1ue55/8KfJCHZ.jpg'
                            }}/>
                        </View>
                        <Text style={{
                            color: 'white',
                            marginLeft: 10,
                            fontSize: 24
                        }}>賴詰凱</Text>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listIdea,
    }, dispatch);
}
function mapStateToProps({ ideaList }) {
    return {
        ideaList,
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
