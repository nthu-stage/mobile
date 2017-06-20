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
    static defaultProps = {
        action: 'attend',
        created_at: '',
        name: '',
        picture_url: '',
        target: '',
        target_id: '',
    };

    action2sentence(action) {
        return {
            'propose': '籌辦了一場工作坊',
            'attend': '參加了一場工作坊',
            'come_up_with': '許下了一個願望',
            'like': '喜歡了一個願望',
        }[action];
    }

    render() {
        const {action, name, picture_url, target, target_id} = this.props;
        const {iconCornerCotainer, iconCornerBorder, iconCorner} = styles;
        const sentence = this.action2sentence(action);
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail small source={{
                        uri: picture_url
                    }}/>
                    <View style={iconCornerCotainer}>
                        <View style={iconCornerBorder}>
                            <Icon style={iconCorner} name="heart"/>
                        </View>
                    </View>

                </Left>
                <Body>
                    <Text>{name}</Text>
                    <Text note>{`${sentence}：${target}`}</Text>
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
