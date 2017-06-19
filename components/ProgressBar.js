import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ProgressBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bg} />
                <View style={styles.fg} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 3,
        marginTop: 15,
        marginBottom: 15,
    },
    bg: {
        backgroundColor: '#ccc',
        height: 3,
        position: 'relative'
    },
    fg: {
        backgroundColor: 'red',
        height: 3,
        width: '50%',
        position: 'absolute'
    }
});
