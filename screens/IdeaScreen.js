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
            order: 'hot',
            modalToggle: false,
            searchText: '',
            dataSource: ds.cloneWithRows([]),
            hasMoreIdeas:true,
            limit:4,

        };

        this.onUpdate = this.onUpdate.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }

    componentWillMount() {
        this.props.listIdea(this.state.searchText, this.state.order);
    }

    onUpdate(order) {
        console.log("in update" + order[0]);
        if (order[0]) {
            this.setState({order: 'hot'}, () => this.props.listIdea(this.state.searchText, this.state.order))
        } else {
            this.setState({order: 'new'}, () => this.props.listIdea(this.state.searchText, this.state.order))
        }
        
    }

    componentWillReceiveProps(nextProps) {
        let ideaList = nextProps.ideaList;
        ideaList = ideaList.map(idea => Object.assign({}, idea));
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(ideaList),
            listingIdeas: nextProps.ideaList.length
        })
    }
    handleRefresh(){
        this.props.listIdea(this.state.searchText, this.state.order);
    }
    handleLoadMore(){
        
        const {searchText, order, limit, hasMoreWorkshops, listingIdeas} = this.state;
        const {ideaList, ideaLoad} = this.props;
        console.log("load more "+searchText+" "+order+" "+ideaList.length)
        if (listingIdeas === ideaList.length)
            this.props.listMoreIdea(this.state.searchText, order, ideaList.length, limit);
    }
    handleSearch(e) {
        if (e !== this.state.searchText) {
             this.setState({searchText: e});
            this.props.listIdea(e, this.state.order)
        }
    }
    render() {
        const {order, modalToggle, searchText, dataSource} = this.state;
        const {ideaLoad, ideaList } = this.props;
        return (
            <View style={styles.container}>
                <Navbar title="許願池" right={< SearchModal placeholder="尋找願望" passbackSearchText = {
                    (e) => this.handleSearch(e)

                } />}/>
                <Segment left="熱門" right="最新" onUpdate={this.onUpdate}/>

                    <ListView refreshControl={< RefreshControl refreshing = {ideaLoad} onRefresh = {this.handleRefresh} />}
                    distanceToLoadMore={0} renderScrollComponent={props => {
                        return <InfiniteScrollView {...props}/>
                    }} dataSource={this.state.dataSource} renderRow={(idea) => {
                        return <IdeaItem key={idea.i_id} navigation={this.props.navigation} {...idea}/>;
                    }} canLoadMore={() => {
                        if (ideaLoad || !ideaList.length)
                            return false;
                        return (ideaList.length>=8);
                    }} onLoadMoreAsync={this.handleLoadMore} enableEmptySections={true} removeClippedSubviews={false}/>
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
