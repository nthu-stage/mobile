import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

export default class WorkshopListItem extends Component {
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
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 12
                    }}>已達標</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View>
                        <Text style={{
                            fontSize: 18,
                            marginBottom: 6,
                        }}>文案工作坊</Text>
                        <Text style={{
                            fontSize: 12,
                            color: 'gray'
                        }}>3/10</Text>
                    </View>

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
