import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    AlertIOS,
    Alert
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {LinearGradient} from 'expo';
import {
    Container,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    Title,
    Grid,
    Col,
    Row,
    ListItem
} from 'native-base';
import {likeSearchIdea} from '../actions/idea'

class IdeaItem extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
        this.handleLike = this.handleLike.bind(this);

        const {
            picture_url,
            idea_type,
            skill,
            goal,
            like_number,
            liked
        } = this.props;
        this.state = {
            picture_url,
            idea_type,
            skill,
            goal,
            like_number,
            liked
        }
    }

    componentWillReceiveProps(next) {
        this.setState({
            ...next
        })
    }

    handlePress() {
        this.props.navigation.navigate('ideaShow', {i_id: this.props.i_id});
    }

    handleLike(e) {
        e.stopPropagation();
        this.props.likeSearchIdea(this.props.i_id);
    }

    render() {
        const {
            picture_url,
            idea_type,
            skill,
            goal,
            like_number,
            liked
        } = this.state;
        return (
            <TouchableWithoutFeedback onPress={this.handlePress}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    margin: 10,
                    marginTop: 0,
                    padding: 10,
                    borderRadius: 10,
                    shadowColor: '#A4A9AD',
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 3
                }}>
                    <View>
                        <Image style={{
                            resizeMode: 'cover',
                            height: 100,
                            width: 100,
                            borderRadius: 10,
                            marginRight: 10
                        }} source={{
                            uri: picture_url
                        }}/>
                        <LinearGradient locations={[0, 1]} colors={['rgba(255, 255, 255, 0)', 'black']} style={{
                            position: 'absolute',
                            width: 100,
                            height: 100,
                            borderRadius: 10,
                            opacity: 0.3
                        }}/>
                        <TouchableOpacity onPress={this.handleLike}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                position: 'absolute',
                                left: 6,
                                bottom: 6,
                                backgroundColor: 'rgba(255, 255, 255, 0)'
                            }}>
                                <View style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: 12,
                                    backgroundColor: 'white',
                                    marginRight: 6,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Icon style={{
                                        fontSize: 16,
                                        color: liked
                                            ? '#FF5964'
                                            : '#A4A9AD',
                                        textAlign: 'center',
                                        backgroundColor: 'rgba(0, 0, 0, 0)'
                                    }} name='heart'/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                        paddingTop: 10,
                        paddingBottom: 10
                    }}>
                        <Text style={{
                            fontSize: 18,
                            marginBottom: 6
                        }}>{`${idea_type === 'teach'
                                ? '我想教'
                                : '我想學'}${skill}`}</Text>
                        <Text style={{
                            fontSize: 14,
                            lineHeight: 18,
                            color: '#A4A9AD'
                        }}>{goal}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        likeSearchIdea
    }, dispatch);
}
export default connect(null, mapDispatchToProps)(IdeaItem);
