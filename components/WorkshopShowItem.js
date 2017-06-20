import React, {Component} from 'react';
import {View} from 'react-native';
import {Row, Col, Icon, Text} from 'native-base';

export default class WorkshopShowItem extends Component {
    static defaultProps = {
        padder: true
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,
            }}>
                <View style={{
                    width: 20,
                    marginRight: 10
                }}>
                    <Icon style={{
                        fontSize: 16,
                        color: 'gray',
                        textAlign: 'center'
                    }} name={this.props.iconName}/>
                </View>
                <View style={{
                    flex: 1
                }}>
                    <Text note style={{
                        marginBottom: 4,
                    }}>{this.props.title}</Text>
                    <Text>{this.props.subtitle}</Text>
                </View>
            </View>
        );
    }
}
