import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
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
    render() {
        return (
            <Content>
                <Image style={{
                    resizeMode: 'cover',
                    height: 180,
                    width: null
                }} source={{
                    uri: 'https://i.imgur.com/FmTsK1v.jpg'
                }}/>
                <Content padder>
                    <Grid>
                        <Row>
                            <Col style={{
                                width: 30,
                                marginRight: 10,
                            }}>
                                <Icon style={{
                                    fontSize: 24,
                                    color: 'red',
                                    textAlign: 'center'
                                }} name='heart-o'/>
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
