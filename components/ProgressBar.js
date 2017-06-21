import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ProgressBar extends Component {
    render() {
        const {percent} = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.bg, {backgroundColor: percent === 100 ? '#35A7FF' : '#A4A9AD'}]} />
                <View style={[styles.fg, {width: `${percent}%`}]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 3,
    },
    bg: {
        height: 3,
        position: 'relative'
    },
    fg: {
        backgroundColor: '#FF5964',
        height: 3,
        position: 'absolute'
    }
});
