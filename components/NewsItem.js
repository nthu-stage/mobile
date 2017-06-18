import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    ListItem,
    Thumbnail,
    Text,
    Body,
    Left,
    Right,
    Icon
} from 'native-base';

export default class NewsItem extends Component {
    render() {
        const {iconCornerCotainer, iconCornerBorder, iconCorner} = styles;
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail small source={{
                        uri: 'https://image.ibb.co/h1ue55/8KfJCHZ.jpg'
                    }}/>
                    <View style={iconCornerCotainer}>
                        <View style={iconCornerBorder}>
                            <Icon style={iconCorner} name="heart"/>
                        </View>
                    </View>

                </Left>
                <Body>
                    <Text>賴詰凱</Text>
                    <Text note>喜歡了一個願望：我想學寫程式</Text>
                </Body>
                <Right>
                    <Icon name="angle-right"/>
                </Right>
            </ListItem>
        );
    }
}

const styles = {
    iconCornerCotainer: {
        position: 'absolute',
        right: -4,
        bottom: -4
    },
    iconCornerBorder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 16,
        width: 16,
        borderRadius: 8,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    iconCorner: {
        width: 10,
        height: 10,
        color: 'red',
        fontSize: 10,
    }
}
