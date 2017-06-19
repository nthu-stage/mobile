import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Divider extends Component {
    render() {
        return (
            <View style={styles.container}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        height: 1,
        backgroundColor: '#ccc'
    }
});
