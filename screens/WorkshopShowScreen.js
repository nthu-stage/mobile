import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
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
import {showWorkshop, attendWorkshop} from '../actions/workshop';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.004;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

Geocoder.setApiKey('AIzaSyCODRhTy6XDPgLntVyqTio29sGjQ6wnfok');

class WorkshopShowScreen extends Component {
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

        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleAttend = this.handleAttend.bind(this);
    }
    componentWillMount() {
        const {state} = this.props.navigation;
        StatusBar.setBarStyle('light-content', true);
        Geocoder.getFromLocation(this.props.workshopShow.location).then(json => {
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

        this.props.showWorkshop(state.params.w_id);
    }

    render() {
        const {bannerBackground, bannerTitle, H2LineHeight, textLineHeight, header, headerIcon} = styles;
        const {state} = this.props.navigation;
        const {
            img_url,
            start_datetime,
            end_datetime,
            location,
            content,
            title,
            max_number,
            min_number,
            deadline,
            pre_deadline,
            introduction,
            price,
            attendees_number,
            phase,
            name,
            attended
        } = this.props.workshopShow;
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
                        <View style={bannerBackground}/>
                        <View style={bannerTitle}>
                            <H1 style={{
                                color: 'white'
                            }}>{`${title}`}</H1>
                        </View>
                        <View style={header}>
                            <Button transparent onPress={this.handleGoBack}>
                                <Icon style={headerIcon} name='angle-left'/>
                            </Button>
                        </View>
                    </Content>
                    <Content padder>
                        <Button block onPress={this.handleAttend}>
                            <Text>{attended ? `我要報名` : `取消報名`}</Text>
                        </Button>
                    </Content>
                    <Content padder>
                        <Grid style={{
                            flexDirection: 'column'
                        }}>
                            <WorkshopShowItem iconName="calendar" title="時間" subtitle={`${start_datetime} ~ ${end_datetime}`}/>
                            <WorkshopShowItem iconName="map-marker" title="地點" subtitle={location}/>
                            <WorkshopShowItem iconName="male" title="報名人數" subtitle={`${attendees_number}/${max_number}`}/>
                            <WorkshopShowItem iconName="calendar-times-o" title="報名截止" subtitle={deadline}/>
                            <WorkshopShowItem iconName="money" title="價 格" subtitle={price}/>
                            <WorkshopShowItem padder={false} iconName="user" title="講者" subtitle={name}/>
                        </Grid>
                    </Content>
                    <Content>
                        <MapView style={{
                            flex: 1,
                            height: 120,
                            width: '100%'
                        }} region={this.state.region}>
                            <MapView.Marker coordinate={this.state.region} title={location}/>
                        </MapView>
                    </Content>
                    <Content padder>
                        <H2 style={H2LineHeight}>簡介</H2>
                        <Text style={textLineHeight}>{introduction}</Text>
                    </Content>
                    <Content padder>
                        <H2 style={H2LineHeight}>詳細介紹</H2>
                        <Text style={textLineHeight}>{content}</Text>
                    </Content>
                    <Content padder>
                        <Button block onPress={this.handleAttend}>
                            <Text>{attended ? `我要報名` : `取消報名`}</Text>
                        </Button>
                    </Content>
                </Content>
            </Container>

        );
    }

    handleGoBack() {
        this.props.navigation.goBack();
    }

    handleAttend() {
        const {state} = this.props.navigation;
        this.props.attendWorkshop(state.params.w_id);
    }
}

function mapStateToProps({workshopShow}) {
    return {workshopShow}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showWorkshop,
        attendWorkshop
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopShowScreen);

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
