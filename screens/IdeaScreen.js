import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class IdeaScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>I'm the IdeaScreen component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
