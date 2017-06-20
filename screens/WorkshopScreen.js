import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {listWorkshop, listMoreWorkshop} from '../actions/workshop';
import {View, StyleSheet, ListView, Imagem, RefreshControl} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import {
    Container,
    Header,
    Left,
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
    Thumbnail,
    Text
} from 'native-base';
import Navbar from '../components/Navbar';
import Segment from '../components/Segment';
import SearchModal from '../components/SearchModal'
import WorkshopItem from '../components/WorkshopItem';

// https://github.com/GeekyAnts/NativeBase/issues/131#issuecomment-241969326
class WorkshopScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '工作坊',
        tabBarIcon: ({tintColor}) => <Icon style={{
                color: tintColor,
                fontSize: 24
            }} name='users'/>
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => JSON.stringify(r1) !== JSON.stringify(r2)
            }),
            searchText: '',
            stateFilter: 3,
            modalToggle: false,
            limit: 3,
            hasMoreWorkshops: true,
            listingWorkshops: 0
        }

        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentWillMount() {
        const {searchText, stateFilter, hasMoreWorkshops} = this.state;
        const {workshopList} = this.props;
        this.props.listWorkshop(searchText, stateFilter);
    }

    componentWillReceiveProps(nextProps) {
        const {workshopList} = this.props;
        const {limit} = this.state;
        if (workshopList !== nextProps.workshopList) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.workshopList),
                // listingWorkshops: nextProps.workshopList.length
            });
        }
    }

    render() {
        const {workshopList, navigation, workshopLoad} = this.props;
        const {stateFilter, hasMoreWorkshops} = this.state;
        let prop = stateFilter >> 1,
            goal = stateFilter & 1;
        return (
            <View style={styles.container}>
                <Navbar title="工作坊" right={< SearchModal passbackSearchText = {
                    e => this.handleSearch(e)
                } />}/>
                <Segment multiple left="調查中" right="已達標" onUpdate={this.handleFilter}/>
                <ListView refreshControl={< RefreshControl refreshing = {
                    workshopLoad
                }
                onRefresh = {
                    this.handleRefresh
                } />} distanceToLoadMore={300} renderScrollComponent={props => {
                    return <InfiniteScrollView {...props}/>
                }} dataSource={this.state.dataSource} renderRow={(workshop) => {
                    return <WorkshopItem key={workshop.w_id} navigation={this.props.navigation} {...workshop}/>;
                }} canLoadMore={() => {
                    if (workshopLoad || !workshopList.length)
                        return false;
                    return hasMoreWorkshops;
                }} onLoadMoreAsync={this.handleLoadMore} enableEmptySections={true}/>
            </View>
        );
    }

    handleRefresh() {
        const {searchText, stateFilter} = this.state;
        this.props.listWorkshop(searchText, stateFilter);
    }

    handleLoadMore() {
        const {searchText, stateFilter, limit, hasMoreWorkshops, listingWorkshops} = this.state;
        const {workshopList, workshopLoad} = this.props;
        // if (listingWorkshops === workshopList.length)
            this.props.listMoreWorkshop(searchText, stateFilter, workshopList.length, limit);
    }

    handleFilter(f) {
        const prop = f[0]
                ? 1
                : 0,
            goal = f[1]
                ? 1
                : 0;
        this.setState({
            stateFilter: (prop << 1) + goal
        });
        this.props.listWorkshop(this.state.searchText, (prop << 1) + goal);
    }

    handleSearch(e) {
        if (e !== this.state.searchText) {
            this.setState({searchText: e});
            this.props.listWorkshop(e, this.stateFilter, 0, this.state.limit);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc'
    }
})

function mapStateToProps({workshopList, workshopLoad}) {
    return {workshopList, workshopLoad}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listWorkshop,
        listMoreWorkshop
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopScreen);
