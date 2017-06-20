import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
    ListItem,
    Left,
    Text,
    Icon,
    Body,
    Right
} from 'native-base';

export default class ProfileItem extends Component {
    static defaultProps = {
        icon: 'heart',
        iconColor: 'red',
        title: 'Profil Item',
        onPress: () => {}
    };

    render() {
        const {icon, iconColor, title, onPress} = this.props;
        return (
            <ListItem icon>
                <Left>
                    <TouchableOpacity onPress={onPress}>
                        <Icon style={{
                            fontSize: 20,
                            textAlign: 'center',
                            color: iconColor
                        }} name={icon}/>
                    </TouchableOpacity>
                </Left>
                <Body>
                    <TouchableOpacity onPress={onPress}>
                        <Text>{title}</Text>
                    </TouchableOpacity>
                </Body>
                <Right>
                    <TouchableOpacity onPress={onPress}>
                        <Icon name="angle-right"/>
                    </TouchableOpacity>
                </Right>
            </ListItem>
        );
    }
}
