import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, ScrollView, StyleSheet} from 'react-native';
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
        this.state = {
            dataSource: [
                {
                    type: 'separator',
                    data: '10 小時前'
                },
                1,
                2, {
                    type: 'separator',
                    data: '三天前'
                },
                3,
                4, {
                    type: 'separator',
                    data: '七天前'
                },
                5,
                6,
                7,
                8
            ]
        }
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
                data.push({
                    type: 'separator',
                    title: key,
                });
                current = key;
            }
            data.push(s);
        }
        return data;
    }

    componentWillMount() {
        this.props.listNews();
    }

    renderRow(rowData) {
        if (rowData.type === 'separator') {
            return (
                <Separator bordered>
                    <Text>{rowData.title}</Text>
                </Separator>
            );
        }
        return <NewsItem {...rowData}/>;
    }

    render() {
        return (
            <View style={styles.container}>
                <Navbar title="動態消息"/>
                <ScrollView style={{
                    flex: 1
                }}>
                    <List dataArray={this.source2data(this.props.news)} renderRow={this.renderRow}/>
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

function mapStateToProps({news}) {
    return {news};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listNews
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
