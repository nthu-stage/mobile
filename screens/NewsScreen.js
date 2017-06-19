import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
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
import NewsItem from '../components/NewsItem';

export default class NewsScreen extends Component {
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

    renderRow(rowData) {
        if (rowData.type === 'separator') {
            return (
                <Separator bordered>
                    <Text>{rowData.data}</Text>
                </Separator>
            );
        }
        return <NewsItem/>;
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={{
                        width: '100%',
                        height: 20
                    }}/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        height: 64,
                        padding: 20
                    }}>
                        <View/>
                        <View>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                lineHeight: 16
                            }}>
                                動態消息
                            </Text>
                        </View>
                        <View/>
                    </View>
                </View>
                <ScrollView style={{
                    flex: 1
                }}>
                    <List removeClippedSubviews={false} dataArray={this.state.dataSource} renderRow={this.renderRow}/>
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
