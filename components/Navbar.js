import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Navbar extends Component {
    render() {
        const {right, title, left} = this.props;
        return (
            <View>
                <View style={{
                    width: '100%',
                    height: 20
                }}/>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                    height: 64,
                    padding: 20
                }}>
                    <View style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}>
                        {left}
                    </View>
                    <View style={{
                        flex: 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            lineHeight: 16
                        }}>
                            {title}
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>
                        {right}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
