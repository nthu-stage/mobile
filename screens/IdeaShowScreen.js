import React, {Component} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {
    Container,
    Content,
    Text,
    H1,
    H2,
    Icon,
    Button
} from 'native-base';
import {LinearGradient} from 'expo';
const {width, height} = Dimensions.get('window');

export default class IdeaShowScreen extends Component {
    render() {
        const {bannerBackground, bannerTitle, authorContainer, authorImageContainer, authorImage, likeContainer} = styles;
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
                            height,
                            width
                        }} source={{
                            uri: 'https://image.ibb.co/h1ue55/8KfJCHZ.jpg'
                        }}/>
                        <View style={bannerBackground} />
                        <View style={authorContainer}>
                            <View style={authorImageContainer}>
                                <Image style={authorImage} source={{
                                    uri: 'https://image.ibb.co/h1ue55/8KfJCHZ.jpg'
                                }}/>
                            </View>
                            <Text style={{
                                color: 'white',
                                marginLeft: 10,
                                fontSize: 20
                            }}>賴詰凱</Text>
                        </View>
                        <View style={bannerTitle}>
                            <Text style={{
                                color: 'white',
                                fontSize: 30,
                                lineHeight: 36,
                                marginBottom: 8,
                            }}>我想學畫畫</Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                                lineHeight: 24,
                            }}>初階人像攝影工作坊，從基本觀念、拍攝所需至燈光運用，完整流程深入淺出一次瞭解。</Text>
                        </View>
                        <View style={likeContainer}>
                            <Button danger rounded>
                                <Icon name="heart" />
                            </Button>
                            <Text style={{
                                color: 'white',
                                marginLeft: 10,
                                fontSize: 20
                            }}>31 人喜歡</Text>
                        </View>
                    </Content>

                </Content>
            </Container>
        );
    }
}

const styles = {
    bannerBackground: {
        height,
        width,
        backgroundColor: 'black',
        opacity: 0.6,
        position: 'absolute'
    },
    bannerTitle: {
        height,
        width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        padding: 10
    },
    authorContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        top: 40,
        left: 20
    },
    authorImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    authorImage: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    likeContainer: {
        position: 'absolute',
        left: 20,
        bottom: 70,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
};
