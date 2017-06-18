import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, AlertIOS, Alert} from 'react-native';
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
    constructor(props){
        super(props);
        this.handlePress = this.handlePress.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }
    handlePress(){
        Alert.alert(
        'Picture has been pressed.'
        );
    }
    handleLike(){
        Alert.alert(
        'Like has been pressed.',
        );
        
    }
    
    render() {
        return (
            <Content>
                <TouchableOpacity onPress={this.handlePress}>
                    <Image style={{
                        resizeMode: 'cover',
                        height: 180,
                        width: null
                    }} source={{
                        uri: 'https://i.imgur.com/FmTsK1v.jpg'
                    }}/>
                </TouchableOpacity>
                <Content padder>
                    <Grid>
                        <Row>
                            <Col style={{
                                width: 30,
                                marginRight: 10,
                            }}>
                                <TouchableOpacity onPress={this.handleLike}>
                                    <Icon style={{
                                        fontSize: 24,
                                        color: 'red',
                                        textAlign: 'center'
                                    }} name='heart-o'/>
                                </TouchableOpacity>
                            </Col>
                            <Col style={{flex: 1, justifyContent: 'center'}}>
                                <Text>我想學攝影</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{
                                width: 30,
                                marginRight: 10,
                            }}>
                                <Text note style={{textAlign: 'center'}}>12</Text>
                            </Col>
                            <Col style={{flex: 1, justifyContent: 'center'}}>
                                <Text note>希望可以隨時拿起手機紀錄身邊的美好的事物</Text>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
                <View style={{
                    marginBottom: 30
                }}/>
            </Content>
        );
    }
}
