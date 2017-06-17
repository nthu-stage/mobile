import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
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
import ProgressBar from './ProgressBar';
import Diveder from './Diveder';

export default class WorkshopItem extends Component {
    render() {
        return (
            <Content>
                <Image style={{
                    resizeMode: 'cover',
                    height: 180,
                    width: null
                }} source={{
                    uri: 'https://image.ibb.co/h1ue55/8KfJCHZ.jpg'
                }}/>
                <Content padder>
                    <Grid>
                        <Row>
                            <Col>
                                <Row>
                                    <Text>文字工作坊</Text>
                                </Row>
                                <Row>
                                    <Text note>重組文字，表達情感，點出故事賣點！</Text>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ProgressBar/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Text>68%</Text>
                                </Row>
                                <Row>
                                    <Text note>達標</Text>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Text>50</Text>
                                </Row>
                                <Row>
                                    <Text note>元</Text>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Text>32</Text>
                                </Row>
                                <Row>
                                    <Text note>天</Text>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
                <View style={{marginBottom: 30}}/>
            </Content>
        );
    }
}
