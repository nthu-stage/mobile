import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

export default class IdeaListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'white',
                margin: 10,
                marginTop: 0,
                padding: 10,
                borderRadius: 10,
                shadowColor: 'gray',
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.15,
                shadowRadius: 3
            }}>
                <View style={{
                    height: 50,
                    width: 50,
                    borderRadius: 10,
                    backgroundColor: '#d9534f',
                    marginRight: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 12,
                        marginBottom: 6,
                        backgroundColor: 'rgba(0,0,0,0)'
                    }}>333
                    </Text>
                    <Icon name="heart" style={{
                        fontSize: 12,
                        color: 'white'
                    }}/>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 18
                    }}>我想學畫畫</Text>
                    <Icon name="angle-right" style={{
                        fontSize: 18,
                        color: '#999'
                    }}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#ccc',
        borderBottomWidth: 1
    }
});
