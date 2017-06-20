import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

export default class IdeaListItem extends Component {
    static defaultProps = {
        i_id: 0,
        idea_type: 'teach',
        skill: '文案工作坊',
        like_number: 333,
        onPress: () => {}
    };

    render() {
        const {i_id, idea_type, skill, like_number} = this.props;
        const {container, badgeContainer, likeText, titleContainer} = styles;
        const iWanna = idea_type === 'teach'
            ? '我想教'
            : '我想學';
        return (
            <TouchableOpacity style={container} onPress={e => this.props.navigation.navigate('ideaListShow', {i_id})}>
                <View style={badgeContainer}>
                    <Text style={likeText}>{like_number}</Text>
                    <Icon name="heart" style={{
                        fontSize: 12,
                        color: 'white'
                    }}/>
                </View>
                <View style={titleContainer}>
                    <Text style={{
                        fontSize: 18
                    }}>{`${iWanna}${skill}`}</Text>
                    <Icon name="angle-right" style={{
                        fontSize: 18,
                        color: '#999'
                    }}/>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
    },
    badgeContainer: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: '#d9534f',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    likeText: {
        color: 'white',
        fontSize: 12,
        marginBottom: 6,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
