import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, StyleSheet, ListView, Image, Alert} from 'react-native';
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
} from 'native-base';
import IdeaItem from '../components/IdeaItem';
import SearchModal from '../components/SearchModal'
import { listIdea } from '../actions/idea'

class IdeaScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '許願池',
        tabBarIcon: ({tintColor}) => <Icon style={{color: tintColor, fontSize: 24}} name='gift'/>
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [1, 2, 3, 4],
            order:'new',
            modalToggle: false,
            searchText:''
        };
    }
    componentWillMount(){
        this.props.listIdea(this.state.searchText,this.state.order);
    }

    render() {
        const { order, modalToggle, searchText } = this.state;
        const ideas = this.props.ideaList;
        console.log(ideas);
        return (
            <Container>
                <Header>
                    <Left></Left>
                    <Body>
                        <Title>許願池</Title>
                    </Body>
                    <Right>
                        <SearchModal passbackSearchText={(e)=>this.setState({searchText:e})} />
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
                <Content style={{
                    backgroundColor: '#f6f7f9'
                }}>
                    <List removeClippedSubviews={false} dataArray={this.state.dataSource} renderRow={(rowData) => <IdeaItem/>}/>
                </Content>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listIdea,
    }, dispatch);
}
function mapStateToProps({ ideaList }) {
    return {
        ideaList,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IdeaScreen);
