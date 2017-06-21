import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
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
        target_id: ''
    };

    action2sentence(action) {
        return {'propose': '籌辦了一場工作坊', 'attend': '參加了一場工作坊', 'come_up_with': '許下了一個願望', 'like': '喜歡了一個願望'}[action];
    }

    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }

    action2icon(action) {
        const iconName = {
            'propose': 'users',
            'attend': 'user-plus',
            'come_up_with': 'gift',
            'like': 'heart'
        }[action];
        const iconColor = {
            'propose': '#35A7FF',
            'attend': '#35A7FF',
            'come_up_with': '#FFBA49',
            'like': '#FF5964'
        }[action];
        return {iconName, iconColor}
    }

    onPress() {
        const {action, target_id, navigation} = this.props;
        if (action === 'propose' || action === 'attend') {
            navigation.navigate('workshopNewsShow', {w_id: target_id});
        } else if (action === 'come_up_with' || action === 'like') {
            navigation.navigate('ideaNewsShow', {i_id: target_id});
        }
    }

    render() {
        const {
            action,
            name,
            picture_url,
            target,
            target_id,
            last
        } = this.props;
        const {iconCornerCotainer, iconCornerBorder, iconCorner} = styles;
        const sentence = this.action2sentence(action);
        const {iconName, iconColor} = this.action2icon(action);

        return (
            <ListItem avatar last={last}>
                <Left>
                    <TouchableOpacity onPress={this.onPress}>
                        <Thumbnail small source={{
                            uri: picture_url
                        }}/>
                        <View style={iconCornerCotainer}>
                            <View style={{
                                ...iconCornerBorder,
                                borderColor: iconColor
                            }}>
                                <Icon style={{
                                    ...iconCorner,
                                    color: iconColor
                                }} name={iconName}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Left>
                <Body>
                    <TouchableOpacity onPress={this.onPress}>
                        <Text>{name}</Text>
                        <Text note>{`${sentence}：${target}`}</Text>
                    </TouchableOpacity>
                </Body>
                <Right>
                    <TouchableOpacity onPress={this.onPress}>
                        <Icon name="angle-right"/>
                    </TouchableOpacity>
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
        fontSize: 10
    }
}
