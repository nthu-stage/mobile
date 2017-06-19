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
import Diveder from './Diveder';

export default class IdeaItem extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }
    handlePress() {
        Alert.alert('Picture has been pressed.');
    }
    handleLike() {
        Alert.alert('Like has been pressed.',);

    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'white',
                margin: 10,
                marginBottom: 0,
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
                    <TouchableOpacity onPress={this.handlePress}>
                        <Image style={{
                            resizeMode: 'cover',
                            height: 100,
                            width: 100,
                            borderRadius: 10,
                            marginRight: 10
                        }} source={{
                            uri: 'https://i.imgur.com/FmTsK1v.jpg'
                        }}/>
                        <LinearGradient locations={[0, 1]} colors={['rgba(255, 255, 255, 0)', 'black']} style={{
                            position: 'absolute',
                            width: 100,
                            height: 100,
                            borderRadius: 10,
                            opacity: 0.3
                        }}/>
                    </TouchableOpacity>
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
                                31
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
                    }}>我想學攝影</Text>
                    <Text style={{
                        fontSize: 14,
                        lineHeight: 18,
                        color: 'gray'
                    }}>希望可以隨時拿起手機紀錄身邊的美好的事物</Text>
                </View>
            </View>
        );
    }
}
