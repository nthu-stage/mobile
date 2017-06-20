import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    View,
    ScrollView,
    StyleSheet,
    ListView,
    Image,
    Alert,
    RefreshControl
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
import {listIdea, listMoreIdea} from '../actions/idea';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

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
        
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => (r1.i_id !== r2.i_id) || (r1.like_number !== r2.like_number)
        });
        this.state = {
            order: 'new',
            modalToggle: false,
            searchText: '',
            dataSource: ds.cloneWithRows([]),
            hasMoreIdeas:true,
            limit:4,
        };

        this.onUpdate = this.onUpdate.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        
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
        let ideaList = nextProps.ideaList;
        ideaList = ideaList.map(idea => Object.assign({}, idea));
        console.log(nextProps.ideaList);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.ideaList),
            listingIdeas: nextProps.ideaList.length
        })
    }
    handleRefresh(){
        this.props.listIdea(this.state.searchText, this.state.order);
    }
    handleLoadMore(){
        console.log("load more")
        const {searchText, order, limit, hasMoreWorkshops, listingIdeas} = this.state;
        const {ideaList, ideaLoad} = this.props;
        if (listingIdeas === ideaList.length)
        console.log("load more2")
            this.props.listMoreIdea(searchText, order, ideaList.length, limit);
    }

    render() {
        const {order, modalToggle, searchText, dataSource} = this.state;
        const {ideaLoad, ideaList } = this.props;
        return (
            <View style={styles.container}>
                <Navbar title="許願池" right={< SearchModal passbackSearchText = {
                    e => this.setState({searchText: e})
                } />}/>
                <Segment left="熱門" right="最新" onUpdate={this.onUpdate}/>
                {/*<ScrollView style={{
                    flex: 1
                }}>*/}
                   
                    <ListView refreshControl={< RefreshControl refreshing = {ideaLoad} onRefresh = {this.handleRefresh} />} 
                    distanceToLoadMore={300} renderScrollComponent={props => {
                        return <InfiniteScrollView {...props}/>
                    }} dataSource={dataSource} renderRow={(idea) => {
                        return <IdeaItem key={idea.i_id} navigation={this.props.navigation} content={idea}/>;
                    }} canLoadMore={() => {
                        if (ideaLoad || !ideaList.length)
                            return false;
                        return this.state.hasMoreIdeas;
                    }} onLoadMoreAsync={this.handleLoadMore} enableEmptySections={true}/>
                {/*</ScrollView>*/}
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

function mapStateToProps({ideaList, ideaLoad}) {
    return {ideaList, ideaLoad}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listIdea,
        listMoreIdea
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaScreen);
