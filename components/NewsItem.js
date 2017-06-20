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

    action2icon(action) {
        const iconName = {
            'propose': 'users',
            'attend': 'user-plus',
            'come_up_with': 'gift',
            'like': 'heart',
        }[action];
        const iconColor = {
            'propose': '#145C9E',
            'attend': '#145C9E',
            'come_up_with': '#7E52A0',
            'like': '#EF476F',
        }[action];
        return {
            iconName,
            iconColor
        }
    }

    render() {
        const {action, name, picture_url, target, target_id, last} = this.props;
        const {iconCornerCotainer, iconCornerBorder, iconCorner} = styles;
        const sentence = this.action2sentence(action);
        const {iconName, iconColor} = this.action2icon(action);

        return (
            <ListItem avatar last={last}>
                <Left>
                    <Thumbnail small source={{
                        uri: picture_url
                    }}/>
                    <View style={iconCornerCotainer}>
                        <View style={{...iconCornerBorder, borderColor: iconColor}}>
                            <Icon style={{...iconCorner, color: iconColor}} name={iconName}/>
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
        borderWidth: 1,
        backgroundColor: 'white'
    },
    iconCorner: {
        width: 10,
        height: 10,
        fontSize: 10,
    }
}
