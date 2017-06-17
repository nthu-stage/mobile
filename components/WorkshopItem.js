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
    Row
} from 'native-base';
import ProgressBar from './ProgressBar';

export default class WorkshopItem extends Component {
    render() {
        return (
            <Card>
                <CardItem cardBody>
                    <Image style={{
                        resizeMode: 'cover',
                        height: 140,
                        width: 350,
                        left: 0,
                        right: 0,
                        top: 0
                    }} source={{
                        uri: 'https://image.ibb.co/h1ue55/8KfJCHZ.jpg'
                    }}/>
                </CardItem>
                <CardItem>
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
                                <ProgressBar />
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
                </CardItem>
            </Card>
        );
    }
}
