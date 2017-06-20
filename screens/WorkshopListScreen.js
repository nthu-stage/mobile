import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
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
import {NavigationActions} from 'react-navigation';
import Navbar from '../components/Navbar';
import WorkshopListItem from '../components/WorkshopListItem';

export default class WorkshopListScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '個人',
        tabBarIcon: ({tintColor}) => <Icon style={{
                color: tintColor,
                fontSize: 24
            }} name='user-circle-o'/>
    };

    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.renderGoBackIcon = this.renderGoBackIcon.bind(this);
    }

    renderGoBackIcon() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                <Icon name="angle-left"/>
            </TouchableOpacity>
        );
    }

    renderRow(rowData) {
        return (
            <WorkshopListItem {...rowData} navigation={this.props.navigation}/>
        );
    }

    render() {
        const {title, dataArray} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Navbar left={this.renderGoBackIcon()} title={title}/>
                <ScrollView style={{
                    flex: 1
                }}>
                    <List removeClippedSubviews={false} dataArray={dataArray} renderRow={this.renderRow}/>
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
