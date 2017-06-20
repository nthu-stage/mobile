import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

export default class WorkshopListItem extends Component {
    static defaultProps = {
        w_id: 0,
        state: 'judging',
        title: '文案工作坊',
        date: '2017/06/14 10:00:00',
        onPress: () => {}
    };

    state2badge(state) {
        const m = {
            'judging': '#0275d8',
            'judge_na': '#d9534f',
            'investigating': '#f0ad4e',
            'unreached': '#d9534f',
            'reached': '#5cb85c',
            'over': '#636c72'
        }
        const n = {
            'judging': '審核中',
            'judge_na': '審核失敗',
            'judge_ac': '調查中',
            'unreached': '未達標',
            'reached': '已達標',
            'over': '已結束'
        }
        return {badge: n[state], badgeColor: m[state]}
    }

    render() {
        const {container, badgeContainer, titleContainer} = styles;
        const {state, title, date} = this.props;
        const {badge, badgeColor} = this.state2badge(state);
        return (
            <View style={container}>
                <View style={[badgeContainer, {backgroundColor: badgeColor}]}>
                    <Text style={{
                        color: 'white',
                        fontSize: 12
                    }}>{badge}</Text>
                </View>
                <View style={titleContainer}>
                    <View>
                        <Text style={{
                            fontSize: 18,
                            marginBottom: 6
                        }}>{title}</Text>
                        <Text style={{
                            fontSize: 12,
                            color: 'gray'
                        }}>{date}</Text>
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
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
