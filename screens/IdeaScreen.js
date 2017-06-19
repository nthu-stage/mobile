import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    View,
    ScrollView,
    StyleSheet,
    ListView,
    Image,
    Alert
} from 'react-native';
import {
    Container,
    Header,
    Left,
    Text,
    Body,
    Title,
    Right,
    Content,
    Button,
    Icon,
    List,
    ListItem,
    Card,
    CardItem,
    Thumbnail
} from 'native-base';
import Navbar from '../components/Navbar';
import Segment from '../components/Segment';
import IdeaItem from '../components/IdeaItem';
import SearchModal from '../components/SearchModal';
import {listIdea} from '../actions/idea';

class IdeaScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '許願池',
        tabBarIcon: ({tintColor}) => <Icon style={{
                color: tintColor,
                fontSize: 24
            }} name='gift'/>
    };

    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            order: 'new',
            modalToggle: false,
            searchText: ''
        };
    }

    componentWillMount() {
        this.props.listIdea(this.state.searchText, this.state.order);
    }

    onUpdate(order) {
        if (order[0]) {
            this.setState({order: 'hot'})
        } else {
            this.setState({order: 'new'})
        }
    }

    render() {
        const {order, modalToggle, searchText} = this.state;
        const ideas = this.props.ideaList;

        return (
            <View style={styles.container}>
                <Navbar title="許願池" right={< SearchModal passbackSearchText = {
                    e => this.setState({searchText: e})
                } />}/>
                <Segment left="熱門" right="最新" onUpdate={this.onUpdate}/>
                <ScrollView style={{
                    flex: 1
                }}>
                    <List removeClippedSubviews={false} dataArray={ideas} renderRow={(idea) => <IdeaItem content={idea} navigation={this.props.navigation}/>}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc'
    }
})

function mapStateToProps({ideaList}) {
    return {ideaList}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listIdea
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaScreen);
