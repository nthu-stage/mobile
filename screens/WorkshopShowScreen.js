import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    Platform
} from 'react-native';
import {MapView} from 'expo';
import {
    Container,
    Header,
    Left,
    Body,
    Title,
    Right,
    Content,
    Segment,
    Button,
    Icon,
    List,
    ListItem,
    Card,
    CardItem,
    Thumbnail,
    Text,
    H1,
    H2,
    Grid,
    Row,
    Col
} from 'native-base';
import Geocoder from 'react-native-geocoding';
import WorkshopShowItem from '../components/WorkshopShowItem';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.004;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

Geocoder.setApiKey('AIzaSyCODRhTy6XDPgLntVyqTio29sGjQ6wnfok');

export default class WorkshopShowScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
        }
    }
    componentWillMount() {
        StatusBar.setBarStyle('light-content', true);
        Geocoder.getFromLocation('清華大學實齋').then(json => {
            var location = json.results[0].geometry.location;
            this.setState({
                region: {
                    latitude: location.lat,
                    longitude: location.lng,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }
            });
            console.log(location.lat + ", " + location.lng);
        }, error => {
            console.log(error);
        });
    }

    render() {
        const {bannerBackground, bannerTitle, H2LineHeight, textLineHeight, header, headerIcon} = styles;
        return (
            <Container>
                <Content style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}>
                    <Content>
                        <Image style={{
                            position: 'relative',
                            resizeMode: 'cover',
                            height: 180,
                            width: null
                        }} source={{
                            uri: 'https://image.ibb.co/h1ue55/8KfJCHZ.jpg'
                        }}/>
                        <View style={bannerBackground}>
                            <H1 style={bannerTitle}>Hello, World</H1>
                        </View>
                        <View style={bannerTitle}>
                            <H1 style={{
                                color: 'white'
                            }}>文案工作坊</H1>
                        </View>
                        <View style={header}>
                            <Button transparent>
                                <Icon style={headerIcon} name='angle-left'/>
                            </Button>
                        </View>
                    </Content>
                    <Content padder>
                        <Button block>
                            <Text>我要報名</Text>
                        </Button>
                    </Content>
                    <Content padder>
                        <Grid style={{
                            flexDirection: 'column'
                        }}>
                            <WorkshopShowItem iconName="calendar" title="時間" subtitle="2017/06/03 03:21:26 ~ 2017/06/03 03:21:26"/>
                            <WorkshopShowItem iconName="map-marker" title="地點" subtitle="清華大學實齋講堂"/>
                            <WorkshopShowItem iconName="male" title="報名人數" subtitle="0/30"/>
                            <WorkshopShowItem iconName="calendar-times-o" title="報名截止" subtitle="2017/06/03 03:21:26"/>
                            <WorkshopShowItem iconName="money" title="價 格" subtitle="12342"/>
                            <WorkshopShowItem padder={false} iconName="user" title="講者" subtitle="賴詰凱"/>
                        </Grid>
                    </Content>
                    <Content>
                        <MapView style={{
                            flex: 1,
                            height: 120,
                            width: '100%'
                        }} region={this.state.region}>
                            <MapView.Marker coordinate={this.state.region} title={'清大實齋'}/>
                        </MapView>
                    </Content>
                    <Content padder>
                        <H2 style={H2LineHeight}>簡介</H2>
                        <Text style={textLineHeight}>初階人像攝影工作坊，從基本觀念、拍攝所需至燈光運用，完整流程深入淺出一次瞭解。</Text>
                    </Content>
                    <Content padder>
                        <H2 style={H2LineHeight}>詳細介紹</H2>
                        <Text style={textLineHeight}>有些人剛入門的時候就會買最頂尖最昂貴的攝影器材，但有時候不一定要用最昂貴的器材才能拍到好照片的。在不久之前才有一名 90 後攝影師用一部iPhone 拍出奪得 National Geographic 攝影比賽獎項，證明器材的平貴跟相片的好壞沒有一定關係，器材不是最重要的，一雙「攝影眼」才是拍出好相片的關鍵。</Text>
                    </Content>
                    <Content padder>
                        <Button block>
                            <Text>我要報名</Text>
                        </Button>
                    </Content>
                </Content>
            </Container>

        );
    }
}

const TOOLBAR_HEIGHT = Platform.OS === 'ios'
    ? 84
    : 56;

const styles = {
    bannerBackground: {
        height: 180,
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.6,
        position: 'absolute'
    },
    bannerTitle: {
        height: 180,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    header: {
        height: TOOLBAR_HEIGHT,
        width: '100%',
        paddingTop: 20,
        position: 'absolute'
    },
    headerIcon: {
        color: 'white',
        fontSize: 36
    },
    H2LineHeight: {
        lineHeight: 42,
        textAlign: 'center'
    },
    textLineHeight: {
        lineHeight: 24
    }
}
