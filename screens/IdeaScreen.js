import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView, Image, Modal, Alert} from 'react-native';
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
    Item,
    Input
} from 'native-base';
import IdeaItem from '../components/IdeaItem';
import SearModal from '../components/SearchModal'

export default class IdeaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [1, 2, 3, 4],
            order:'new',
            modalToggle: false,
            searchText:''
        };
    }
    
    render() {
        const { order, modalToggle, searchText } = this.state;
        return (
            <Container>
                <Header>
                    <Left></Left>
                    <Body>
                        <Title>許願池</Title>
                    </Body>
                    <Right>
                        <SearModal passbackSearchText={(e)=>this.setState({searchText:e})} />
                    </Right>
                     
                </Header>
                <Segment>
                    <Button first active={order==="hot"} onPress={()=>{this.setState({order:'hot'})}}>
                        <Text>熱門</Text>
                    </Button>
                    <Button last active={order==="new"} onPress={()=>{this.setState({order:'new'})}}>
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
