import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {
    Container,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    Title,
    Grid,
    Col,
    Row,
    ListItem
} from 'native-base';
import ProgressBar from './ProgressBar';

var _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export default class WorkshopItem extends Component {
    constructor(props) {
        super(props);
    }

    phase2badge(phase) {
        const m = {
            'judging': '#0275d8',
            'judge_na': '#d9534f',
            'judge_ac': '#f0ad4e',
            'investigating': '#f0ad4e',
            'reached': '#5cb85c',
            'unreached': '#d9534f',
            'full': '#d9534f',
            'closed': '#d9534f',
            'over': '#636c72'
        }
        const n = {
            'judging': '審核中',
            'judge_na': '審核失敗',
            'judge_ac': '審核通過',
            'investigating': '調查中',
            'reached': '已達標',
            'unreached': '未達標',
            'full': '額滿',
            'closed': '報名截止',
            'over': '已結束'
        }
        return {badge: n[phase], badgeColor: m[phase]}
    }

    render() {
        const {
            w_id,
            image_url,
            title,
            min_number,
            max_number,
            deadline,
            pre_deadline,
            introduction,
            price,
            phase,
            attendees_number
        } = this.props;
        const {badgeContainer, footerIcon, footerText} = styles;
        const {badgeColor, badge} = this.phase2badge(phase);
        const {navigate} = this.props.navigation;
        let invest_countdown = dateDiffInDays(new Date(Date.now()), new Date(pre_deadline));
        let attend_countdown = dateDiffInDays(new Date(Date.now()), new Date(deadline));
        return (
            <View>
                <TouchableWithoutFeedback onPress={() => {
                    navigate('workshopShow', {w_id: this.props.w_id});
                }}>
                    <Image style={{
                        resizeMode: 'cover',
                        height: 200,
                        width: null,
                        position: 'relative'
                    }} source={{
                        uri: `${image_url}`
                    }}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    navigate('workshopShow', {w_id: w_id});
                }}>
                    <View style={{
                        position: 'relative',
                        top: -40,
                        marginLeft: 15,
                        marginRight: 15,
                        padding: 20,
                        borderRadius: 10,
                        shadowColor: '#A4A9AD',
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.15,
                        shadowRadius: 3
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            marginBottom : 15
                        }}>
                            <Text style={{
                                flex: 1,
                                fontSize: 20,
                                lineHeight: 24,
                                color: '#FF5964'
                            }}>{title}</Text>
                            <View style={[
                                badgeContainer, {
                                    backgroundColor: badgeColor
                                },
                            ]}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 12
                                }}>{badge}</Text>
                            </View>
                        </View>
                        <Text style={{
                            fontSize: 14,
                            color: '#A4A9AD',
                            lineHeight: 18
                        }}>{introduction}</Text>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 20,
                            marginBottom: 6
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Icon style={footerIcon} name='money'/>
                                <Text style={footerText}>{`${price}元`}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Icon style={footerIcon} name='calendar'/>
                                <Text style={footerText}>{phase === 'investigating'
                                        ? `調查倒數 ${invest_countdown} 天`
                                        : `報名倒數 ${attend_countdown} 天`}</Text>
                            </View>
                        </View>
                        <ProgressBar percent={phase === 'investigating'
                            ? attendees_number * 100 / min_number
                            : 100}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 6
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Icon style={footerIcon} name='flag'/>
                                <Text style={footerText}>{phase === 'investigating'
                                        ? `還差 ${min_number - attendees_number} 人達標`
                                        : `剩餘 ${max_number - attendees_number} 個座位`}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = {
    badgeContainer: {
        height: 24,
        width: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerIcon: {
        fontSize: 14,
        color: '#A4A9AD',
        marginRight: 6
    },
    footerText: {
        fontSize: 14,
        color: '#A4A9AD'
    }
}
