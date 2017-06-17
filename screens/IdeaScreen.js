import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView, Image} from 'react-native';
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
    Thumbnail
} from 'native-base';
import IdeaItem from '../components/IdeaItem';

export default class IdeaScreen extends Component {
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
                        <Title>許願池</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search"/>
                        </Button>
                    </Right>
                </Header>
                <Segment>
                    <Button first>
                        <Text>熱門</Text>
                    </Button>
                    <Button last active>
                        <Text>最新</Text>
                    </Button>
                </Segment>
                <Content>
                    <List removeClippedSubviews={false} dataArray={this.state.dataSource} renderRow={(rowData) => <IdeaItem/>}/>
                </Content>
            </Container>
        );
    }
}
