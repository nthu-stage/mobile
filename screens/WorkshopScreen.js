import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { listWorkshop } from '../actions/workshop';
import { View, StyleSheet, ListView, Imagem, RefreshControl } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
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
import SearchModal from '../components/SearchModal'
import WorkshopItem from '../components/WorkshopItem';

// https://github.com/GeekyAnts/NativeBase/issues/131#issuecomment-241969326
class WorkshopScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => JSON.stringify(r1) !== JSON.stringify(r2)
            }),
            searchText: '',
            stateFilter: 3,
            modalToggle: false
        }

        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.listWorkshop(this.state.searchText, this.state.stateFilter);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.workshopList !== nextProps.workshopList) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.workshopList)
            });
        }
    }

    render() {
      const {workshopList} = this.props;
      const {stateFilter} = this.state;
      let prop = stateFilter >> 1, goal = stateFilter & 1;
      return (
          <Container>
              <Header>
                  <Left></Left>
                  <Body>
                      <Title>工作坊</Title>
                  </Body>
                  <Right>
                      <SearchModal passbackSearchText={e => this.handleSearch(e)} />
                  </Right>
              </Header>
              <Segment>
                  <Button first active={prop ? true : false} onPress={e => this.handleFilter(1 - prop, goal)}>
                      <Text>調查中</Text>
                  </Button>
                  <Button last active={goal ? true : false} onPress={e => this.handleFilter(prop, 1 - goal)}>
                      <Text>已達標</Text>
                  </Button>
              </Segment>
              <ListView
                  refreshControl={
                      <RefreshControl refreshing={false} onRefresh={this.handleRefresh} />
                  }
                  distanceToLoadMore={300}
                  renderScrollComponent={props =>{
                      return <InfiniteScrollView {...props} />
                  }}
                  dataSource={this.state.dataSource}
                  renderRow={(workshop) => {
                      return <WorkshopItem key={workshop.w_id} {...workshop} />;
                  }}
                  canLoadMore={() => {
                      return false;
                  }}
                  onLoadMoreAsync={this.handleLoadMore}
                  enableEmptySections={true}
                  style={{backgroundColor: 'white'}}
              />
          </Container>
        );
     }

     handleRefresh() {
        const {searchText, stateFilter} = this.state;
        this.props.listWorkshop(searchText, stateFilter);
     }

     handleLoadMore() {
        // const {listingMorePosts, dispatch, posts, searchText} = this.props;
        // const start = posts[posts.length - 1].id;
        // if (listingMorePosts !== start)
        //     dispatch(listMorePosts(searchText, start));
    }

    handleFilter(prop, goal) {
        this.setState({stateFilter: (prop << 1) + goal});
        this.props.listWorkshop(this.state.searchText, (prop << 1) + goal);
    }

    handleSearch(e) {
        if (e !== this.state.searchText) {
            this.setState({searchText: e});
            this.props.listWorkshop(e, this.stateFilter);
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
