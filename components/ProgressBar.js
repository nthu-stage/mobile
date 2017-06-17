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
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    bg: {
        flex: 1,
        backgroundColor: '#ccc',
        height: 3,
        position: 'relative'
    },
    fg: {
        flex: 1,
        backgroundColor: 'red',
        height: 3,
        width: '50%',
        position: 'absolute'
    }
});
