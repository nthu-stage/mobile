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
        const { navigate } = this.props.navigation;
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
                        shadowColor: 'gray',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.15,
                        shadowRadius: 3,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            marginBottom: 10,
                            color: '#EF476F'
                        }}>{title}</Text>
                        <Text note style={{
                            lineHeight: 18,
                        }}>{introduction}</Text>
                        <ProgressBar percent={phase === 'investigating' ? attendees_number*100/min_number : 100}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon style={{fontSize: 18, color: '#999', marginRight: 6}} name='flag' />
                                <Text style={{color: '#999'}}>{phase === 'investigating' ? `${Math.ceil(attendees_number*100/min_number)}%達標` : `剩餘 ${max_number - attendees_number} 個座位`}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon style={{fontSize: 18, color: '#999', marginRight: 6}} name='money' />
                                <Text style={{color: '#999'}}>{`${price}元`}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon style={{fontSize: 18, color: '#999', marginRight: 6}} name='calendar' />
                                <Text style={{color: '#999'}}>{phase === 'investigating' ? `調查倒數 ${invest_countdown} 天` : `報名倒數 ${attend_countdown} 天`}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
