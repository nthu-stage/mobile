import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {
    Header,
    Left,
    Body,
    Right,
    Title,
    Button,
    Icon,
    List,
    Text
} from 'native-base';
import {BlurView} from 'expo';
import IdeaListItem from '../components/IdeaListItem';

export default class IdeaListScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '個人',
        tabBarIcon: ({tintColor}) => <Icon style={{
                color: tintColor,
                fontSize: 24
            }} name='user-circle-o'/>
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [1, 2, 3, 4],
        };
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
                        <View>
                            <Icon name="angle-left"/>
                        </View>
                        <View>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                lineHeight: 16
                            }}>
                                我許下的願望
                            </Text>
                        </View>
                        <View>
                        </View>
                    </View>
                </View>
                <ScrollView style={{
                    flex: 1
                }}>
                    <List removeClippedSubviews={false} dataArray={this.state.dataSource} renderRow={(rowData) => <IdeaListItem/>}/>
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
