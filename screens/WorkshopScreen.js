import React, {Component} from 'react';
import {View, StyleSheet, ListView, Image} from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Title,
    Right,
    Content,
    Segment,
    Button,
    Icon,
    List,
    ListItem,
    Card,
    CardItem,
    Thumbnail,
    Text
} from 'native-base';
import WorkshopItem from '../components/WorkshopItem';

// https://github.com/GeekyAnts/NativeBase/issues/131#issuecomment-241969326
export default class WorkshopScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [1, 2, 3, 4]
        };
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left></Left>
                    <Body>
                        <Title>工作坊</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search"/>
                        </Button>
                    </Right>
                </Header>
                <Segment>
                    <Button first>
                        <Text>調查中</Text>
                    </Button>
                    <Button last active>
                        <Text>已達標</Text>
                    </Button>
                </Segment>
                <Content style={{
                    backgroundColor: 'white'
                }}>
                    <List removeClippedSubviews={false} dataArray={this.state.dataSource} renderRow={(rowData) => <WorkshopItem/>}/>
                </Content>
            </Container>
        );
    }
}
