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
import Diveder from './Diveder';

export default class WorkshopItem extends Component {
    constructor(props) {
        super(props);

        this.handlePressImage = this.handlePressImage.bind(this);
    }

    render() {
        const {
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
                        uri: 'https://image.ibb.co/h1ue55/8KfJCHZ.jpg'
                    }}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    navigate('workshopShow', {w_id: this.props.w_id});
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
                        }}>文字工作坊</Text>
                        <Text note style={{
                            lineHeight: 18,
                        }}>重組文字，表達情感，點出故事賣點！重組文字，表達情感，點出故事賣點！重組文字，表達情感，點出故事賣點！重組文字，表達情感，點出故事賣點！重組文字，表達情感，點出故事賣點！</Text>
                        <ProgressBar/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon style={{fontSize: 18, color: '#999', marginRight: 6}} name='flag' />
                                <Text style={{color: '#999'}}>68% 達標</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon style={{fontSize: 18, color: '#999', marginRight: 6}} name='money' />
                                <Text style={{color: '#999'}}>50 元</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon style={{fontSize: 18, color: '#999', marginRight: 6}} name='calendar' />
                                <Text style={{color: '#999'}}>27 天</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    handlePressImage() {
        // this.props.navigation.navigate('PostForm');
    }
}
