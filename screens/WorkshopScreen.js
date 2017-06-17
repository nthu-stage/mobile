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
import WorkshopItem from '../components/WorkshopItem';

// https://github.com/GeekyAnts/NativeBase/issues/131#issuecomment-241969326

export default class WorkshopScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
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
                        <Text>熱門</Text>
                    </Button>
                    <Button last active>
                        <Text>最新</Text>
                    </Button>
                </Segment>
                <Content padder>
                    <List removeClippedSubviews={false} dataArray={this.state.dataSource} renderRow={(rowData) => <WorkshopItem/>}/>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
