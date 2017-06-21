import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, ScrollView, ListView, RefreshControl, StyleSheet} from 'react-native';
import moment from 'moment';
import {
    Container,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body,
    Left,
    Right,
    Header,
    Title,
    Icon,
    Separator
} from 'native-base';
import Navbar from '../components/Navbar';
import NewsItem from '../components/NewsItem';
import {listNews} from '../actions/news';
import 'moment/locale/zh-tw';

class NewsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '動態',
        tabBarIcon: ({tintColor}) => <Icon style={{
                color: tintColor,
                fontSize: 24
            }} name='newspaper-o'/>
    };

    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
        this.refreshControl = this.refreshControl.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    componentWillMount() {
        this.props.listNews();
    }

    source2data(source) {
        moment.locale('zh-tw');
        let data = [];
        let current = null;
        for (let s of source) {
            const key = moment(s.created_at).fromNow();
            if (current !== key) {
                if (current !== null) {
                    data[data.length - 1].last = true;
                }
                data.push({type: 'separator', title: key});
                current = key;
            }
            data.push(s);
        }
        return data;
    }

    renderRow(rowData) {
        if (rowData.type === 'separator') {
            return (
                <Separator bordered>
                    <Text>{rowData.title}</Text>
                </Separator>
            );
        }
        return <NewsItem {...rowData} navigation={this.props.navigation}/>;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.source2data(nextProps.news))
        });
    }

    refreshControl() {
        return (<RefreshControl refreshing={this.props.newsLoad} onRefresh={this.onRefresh}/>);
    }

    onRefresh() {
        this.props.listNews();
    }

    render() {
        return (
            <View style={styles.container}>
                <Navbar title="動態消息"/>
                <ListView enableEmptySections removeClippedSubviews={false} dataSource={this.state.dataSource} renderRow={this.renderRow} refreshControl={this.refreshControl()}/>
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

function mapStateToProps({news, newsLoad}) {
    return {news, newsLoad};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listNews
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
