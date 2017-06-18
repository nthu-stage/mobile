import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Container,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body,
    Left,
    Right,
    Header,
    Title,
    Icon,
    Separator
} from 'native-base';
import NewsItem from '../components/NewsItem';

export default class NewsScreen extends Component {
    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
        this.state = {
            dataSource: [
                {
                    type: 'separator',
                    data: '10 小時前'
                },
                1,
                2, {
                    type: 'separator',
                    data: '三天前'
                },
                3,
                4, {
                    type: 'separator',
                    data: '七天前'
                },
                5,
                6,
                7,
                8
            ]
        }
    }

    renderRow(rowData) {
        if (rowData.type === 'separator') {
            return (
                <Separator bordered>
                    <Text>{rowData.data}</Text>
                </Separator>
            );
        }
        return <NewsItem/>;
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>動態消息</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <List removeClippedSubviews={false} dataArray={this.state.dataSource} renderRow={this.renderRow}/>
                </Content>
            </Container>
        );
    }
}
