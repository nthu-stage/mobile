import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    AlertIOS,
    Alert
} from 'react-native';
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

export default class IdeaItem extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
        this.handleLike = this.handleLike.bind(this);

        this.state = {
            uri:'https://i.imgur.com/FmTsK1v.jpg',
            idea_type:'teach',
            skill:'攝影',
            goal:'希望可以用影像留住生命中的美好事物',
            like_number: 31,
            liked:true,
        }
    }
    handlePress() {
        console.log(this.props.navigation);
        this.props.navigation.navigate('ideaShow',{i_id:this.props.i_id});
    }
    handleLike(e) {
        Alert.alert('Like has been pressed.',);
        e.stopPropagation();
        //this.props.likeSearchIdea(this.props.i_id);

    }

    render() {
        const { uri, idea_type, skill, goal, like_number, liked }=this.props.content;
        const _uri = uri? uri: this.state.uri;
        console.log(this.props);
        return (
            <TouchableOpacity onPress={this.handlePress}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'white',
                margin: 10,
                marginTop: 0,
                padding: 10,
                borderRadius: 10,
                shadowColor: 'gray',
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
                        uri: _uri,
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
                            <Icon style={{
                                fontSize: 24,
                                color: 'white',
                                textAlign: 'center',
                                marginRight: 6
                            }} name='heart'/>

                            <Text style={{
                                color: 'white'
                            }}>
                                {like_number}
                            </Text>
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
                    }}>{`${idea_type==='teach'?'我想教':'我想學'}${skill}`}</Text>
                    <Text style={{
                        fontSize: 14,
                        lineHeight: 18,
                        color: 'gray'
                    }}>{goal}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}
