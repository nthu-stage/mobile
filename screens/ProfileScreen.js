import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Dimensions, Image} from 'react-native';
import {
    Container,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body,
    Left,
    Right,
    Header,
    Title,
    Icon,
    Separator,
    Switch
} from 'native-base';
import {LinearGradient, BlurView} from 'expo';
const {width, height} = Dimensions.get('window');

export default class ProfileScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '個人',
        tabBarIcon: ({tintColor}) => <Icon style={{color: tintColor, fontSize: 24}} name='user-circle-o'/>
    };

    render() {
        const {
            avatarContainer,
            avatarBlurBackground,
            avatarBackground,
            authorImageContainer,
            authorImage,
            authorContainer,
            author,
            icon
        } = styles;
        return (
            <Container style={{
                backgroundColor: 'white'
            }}>
                <View style={avatarContainer}>
                    <Image style={{
                        resizeMode: 'cover',
                        height: 180,
                        width: null,

                    }} blurRadius={1} source={{
                        uri: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg'
                    }}/>
                    <LinearGradient locations={[0, 1]} colors={['white', 'black']} style={avatarBackground}/>
                    <View style={authorContainer}>
                        <Text style={author}>賴詰凱</Text>
                    </View>
                    <View style={authorImageContainer}>
                        <Image style={authorImage} source={{
                            uri: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg'
                        }}/>
                    </View>

                </View>
                <Content>
                    <ListItem icon>
                        <Left>
                            <Icon style={{
                                ...icon,
                                color: 'orange'
                            }} name="bell"/>
                        </Left>
                        <Body>
                            <Text>通知開啟</Text>
                        </Body>
                        <Right>
                            <Switch value={true}/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon style={{
                                ...icon,
                                color: 'grey'
                            }} name="calendar"/>
                        </Left>
                        <Body>
                            <Text>平常有空的時間</Text>
                        </Body>
                        <Right>
                            <Icon name="angle-right"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon style={{
                                ...icon,
                                color: '#145C9E'
                            }} name="users"/>
                        </Left>
                        <Body>
                            <Text>我提案的工作坊</Text>
                        </Body>
                        <Right>
                            <Icon name="angle-right"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon style={{
                                ...icon,
                                color: '#145C9E'
                            }} name="user-plus"/>
                        </Left>
                        <Body>
                            <Text>我報名的工作坊</Text>
                        </Body>
                        <Right>
                            <Icon name="angle-right"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon style={{
                                ...icon,
                                color: '#7E52A0'
                            }} name="gift"/>
                        </Left>
                        <Body>
                            <Text>我許下的願望</Text>
                        </Body>
                        <Right>
                            <Icon name="angle-right"/>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon style={{
                                ...icon,
                                color: '#EF476F'
                            }} name="heart"/>
                        </Left>
                        <Body>
                            <Text>我喜歡的願望</Text>
                        </Body>
                        <Right>
                            <Icon name="angle-right"/>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

const styles = {
    avatarContainer: {
        height: 180 + 50,
        position: 'relative',
        marginBottom: 20
    },
    avatarBlurBackground: {
        position: 'absolute',
        width: '100%',
        height: 180
    },
    avatarBackground: {
        position: 'absolute',
        width: width,
        height: 180,
        opacity: 0.6,
    },
    authorContainer: {
        height: 170,
        left: 130,
        justifyContent: 'flex-end',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    author: {
        color: 'white',
        fontSize: 24,
        textShadowColor: 'grey',
        textShadowOffset: {
            width: 0,
            height: 2
        },
        textShadowRadius: 3
    },
    authorImageContainer: {
        position: 'absolute',
        width: 100,
        height: 100,
        top: 180 - 50,
        left: 20,
        borderRadius: 50,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 3
    },
    authorImage: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    icon: {
        fontSize: 20,
        textAlign: 'center'
    }
}
