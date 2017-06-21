import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    Platform,
    TouchableOpacity,
    ScrollView,
    Animated,
    PanResponder
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

import Navbar from '../components/Navbar';
import WorkshopShowItem from '../components/WorkshopShowItem';
import {showWorkshop, attendWorkshop} from '../actions/workshop';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.004;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

Geocoder.setApiKey('AIzaSyCODRhTy6XDPgLntVyqTio29sGjQ6wnfok');

class WorkshopShowScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '工作坊',
        tabBarIcon: ({tintColor}) => <Icon style={{
                color: tintColor,
                fontSize: 24
            }} name='users'/>
    };

    static defaultProps = {
        image_url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=1500%C3%97600&w=1500&h=600',
        start_datetime: 'loading',
        end_datetime: 'loading',
        location: '清華大學',
        content: 'loading',
        title: 'loading',
        max_number: 0,
        min_number: 0,
        deadline: 'loading',
        pre_deadline: 'loading',
        introduction: 'loading',
        price: 0,
        attendees_number: 'loading',
        phase: 'investigating',
        name: 'loading',
        attended: false
    };

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
        this.handleAttend = this.handleAttend.bind(this);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: (event, gesture) => {
                const {phase} = this.props.workshopShow;
                if (!(phase === "reached" || phase === "investigating")) {
                    return;
                }
                Animated.timing(this.position, {
                    toValue: 1,
                    duration: 150
                }).start();
            },
            onPanResponderRelease: (event, gesture) => {
                this.handleAttend();
                Animated.timing(this.position, {
                    toValue: 2,
                    duration: 150
                }).start(() => {
                    this.position.setValue(0);
                });
            }
        });
        this.position = new Animated.Value(0);
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

    renderGoBackIcon() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon name="angle-left"/>
            </TouchableOpacity>
        );
    }

    handleAttend() {
        const {state} = this.props.navigation;
        this.props.attendWorkshop(state.params.w_id);
    }

    getStyle() {
        return ({
            transform: [
                {
                    scale: this.position.interpolate({
                        inputRange: [
                            0, 1, 2
                        ],
                        outputRange: [
                            1, 0.9, 1
                        ],
                        extrapolate: 'clamp'
                    })
                }
            ]
        });
    }

    render() {
        const {container, contentContainer, H2LineHeight, textLineHeight} = styles;
        const {state} = this.props.navigation;
        const {
            image_url,
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
        const canPress = (phase === "reached" || phase === "investigating");
        return (
            <View style={container}>
                <Navbar left={this.renderGoBackIcon()} title={title}/>
                <ScrollView>
                    <Image style={{
                        position: 'relative',
                        resizeMode: 'cover',
                        height: 200,
                        width: null
                    }} source={{
                        uri: `${image_url}`
                    }}/>
                    <View style={contentContainer}>
                        <Animated.View style={this.getStyle()} {...this.panResponder.panHandlers}>
                            <View style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: !canPress
                                    ? '#A4A9AD'
                                    : attended
                                        ? '#35A7FF'
                                        : '#FF5964',
                                padding: 12,
                                borderRadius: 6
                            }}>
                                <Text style={{
                                    color: 'white'
                                }}>{!canPress
                                        ? "未開放報名"
                                        : attended
                                            ? `我要報名`
                                            : `取消報名`}</Text>
                            </View>
                        </Animated.View>
                        <WorkshopShowItem iconName="calendar" title="開始時間" subtitle={`${start_datetime}`}/>
                        <WorkshopShowItem iconName="calendar" title="結束時間" subtitle={`${end_datetime}`}/>

                        <WorkshopShowItem iconName="map-marker" title="地點" subtitle={location}/>
                        <WorkshopShowItem iconName="male" title="報名人數" subtitle={`${attendees_number}/${max_number}`}/>
                        <WorkshopShowItem iconName="calendar-times-o" title="報名截止" subtitle={deadline}/>
                        <WorkshopShowItem iconName="money" title="價 格" subtitle={price}/>
                        <WorkshopShowItem padder={false} iconName="user" title="講者" subtitle={name}/>
                        <MapView style={{
                            flex: 1,
                            height: 120,
                            width: '100%',
                            marginTop: 6
                        }} region={this.state.region}>
                            <MapView.Marker coordinate={this.state.region} title={location}/>
                        </MapView>
                    </View>
                    <View style={contentContainer}>
                        <Text style={H2LineHeight}>簡介</Text>
                        <Text style={textLineHeight}>{introduction}</Text>
                    </View>
                    <View style={contentContainer}>
                        <Text style={H2LineHeight}>詳細介紹</Text>
                        <Text style={textLineHeight}>{content}</Text>
                        <Animated.View style={[this.getStyle(), {marginTop: 10}]} {...this.panResponder.panHandlers}>
                            <View style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: !canPress
                                    ? '#A4A9AD'
                                    : attended
                                        ? '#35A7FF'
                                        : '#FF5964',
                                padding: 12,
                                borderRadius: 6
                            }}>
                                <Text style={{
                                    color: 'white'
                                }}>{!canPress
                                        ? "未開放報名"
                                        : attended
                                            ? `我要報名`
                                            : `取消報名`}</Text>
                            </View>
                        </Animated.View>
                    </View>
                </ScrollView>
            </View>
        );
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

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc'
    },
    contentContainer: {
        position: 'relative',
        top: -40,
        backgroundColor: 'white',
        margin: 10,
        marginTop: 0,
        padding: 16,
        borderRadius: 10,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 3
    },
    H2LineHeight: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    textLineHeight: {
        lineHeight: 24
    }
}
