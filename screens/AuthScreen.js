import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';

export default class AuthScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={e => this.props.navigation.navigate('workshop')}><Text>Hello</Text></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
