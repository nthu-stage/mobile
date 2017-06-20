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
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {
            console.log('rowHasChanged', r1, r2)
            return true;
        }});
        this.state = {
            order: 'new',
            modalToggle: false,
            searchText: '',
            dataSource: this.ds.cloneWithRows([{i_id: 2, like_number: 1}]),
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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            dataSource: this.ds.cloneWithRows([{i_id: 2, like_number: Math.random() * 10}])
        })
    }

    render() {
        const {order, modalToggle, searchText} = this.state;
        const ideas = this.props.ideaList;
        console.log("rerender", this.state.dataSource);
        return (
            <View style={styles.container}>
                <Navbar title="許願池" right={< SearchModal passbackSearchText = {
                    e => this.setState({searchText: e})
                } />}/>
                <Segment left="熱門" right="最新" onUpdate={this.onUpdate}/>
                <ScrollView style={{
                    flex: 1
                }}>
                    <ListView dataSource={this.state.dataSource} renderRow={(idea) => <IdeaItem content={idea} navigation={this.props.navigation}/>}/>
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
