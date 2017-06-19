import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {listWorkshop} from '../actions/workshop';
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
class WorkshopScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '工作坊',
        tabBarIcon: ({tintColor}) => <Icon style={{color: tintColor, fontSize: 24}} name='users'/>
    };

    componentDidMount() {
        this.props.listWorkshop();
        console.log(this.props.workshopList);
    }

    render() {
        if (this.props.workshopList) {
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
                        {this.props.workshopList.map(workshop => <WorkshopItem key={workshop.w_id} {...workshop}/>)}
                    </Content>
                </Container>
            );
        } else {
            return <Container></Container>;
        }
    }
}

function mapStateToProps({workshopList}) {
    return {workshopList}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listWorkshop
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopScreen);
