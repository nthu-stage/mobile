import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    ScrollView,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
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
import {LinearGradient, AppLoading} from 'expo';
import ProfileItem from '../components/ProfileItem';
import {showProfile} from '../actions/profile';

const {width, height} = Dimensions.get('window');

class ProfileScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '個人',
        tabBarIcon: ({tintColor}) => <Icon style={{
                color: tintColor,
                fontSize: 24
            }} name='user-circle-o'/>
    };

    componentWillMount() {
        this.props.showProfile();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        if (!this.props.profile) {
            return (
                <AppLoading />
            );
        }
        const {navigation, auth, profile} = this.props;
        const {navigate} = navigation;
        const {name, picture_url} = auth;
        const {propose, attend, comeUpWith, like} = profile;
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
            <View style={styles.container}>
                <View style={avatarContainer}>
                    <Image style={{
                        resizeMode: 'cover',
                        height: 180,
                        width: null
                    }} blurRadius={1} source={{
                        uri: picture_url
                    }}/>
                    <LinearGradient locations={[0, 1]} colors={['white', 'black']} style={avatarBackground}/>
                    <View style={authorContainer}>
                        <Text style={author}>{name}</Text>
                    </View>
                    <View style={authorImageContainer}>
                        <Image style={authorImage} source={{
                            uri: picture_url
                        }}/>
                    </View>
                </View>
                <ScrollView>
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
                    <ProfileItem icon="calendar" iconColor="grey" title="平常有空的時間"/>
                    <ProfileItem onPress={e => navigate('workshopList', {title: '我提案的工作坊', dataArray: propose})} icon="users" iconColor="#145C9E" title="我提案的工作坊"/>
                    <ProfileItem onPress={e => navigate('workshopList', {title: '我報名的工作坊', dataArray: attend})} icon="user-plus" iconColor="#145C9E" title="我報名的工作坊"/>
                    <ProfileItem onPress={e => navigate('ideaList', {title: '我許下的願望', dataArray: comeUpWith})} icon="gift" iconColor="#7E52A0" title="我許下的願望"/>
                    <ProfileItem onPress={e => navigate('ideaList', {title: '我喜歡的願望', dataArray: like})} icon="heart" iconColor="#EF476F" title="我喜歡的願望"/>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc'
    },
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
        opacity: 0.6
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

function mapStateToProps({profile, auth}) {
    return {profile, auth};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showProfile
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
