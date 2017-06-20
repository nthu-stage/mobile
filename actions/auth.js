import {AsyncStorage} from 'react-native';
import {Facebook} from 'expo';
import {registerOrLogin as registerOrLoginFromApi} from '../api/profile';

export const facebookLogin = (click) => async dispatch => {
    let fb = JSON.parse(await AsyncStorage.getItem('fb'));

    if (fb) {
        dispatch({type: 'FACEBOOK_LOGIN_SUCCESS', payload: fb});
    } else {
        if (click)
            doFacebookLogin(dispatch);
    }

};

const doFacebookLogin = async dispatch => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('1812105742383573', {
        permissions: ['public_profile', 'email', 'user_friends']
    });
    if (type === 'cancel') {
        return dispatch({type: 'FACEBOOK_LOGIN_FAIL'});
    }

    const FB = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large),email`);
    const {id, name, picture, email} = await FB.json();
    const fb = {
        name,
        email,
        picture_url: picture.data.url,
        userID: id,
        accessToken: token
    };

    await registerOrLogin(dispatch, fb);
};

const registerOrLogin = async(dispatch, fb) => {
    try {
        let response = await registerOrLoginFromApi(fb);
        await AsyncStorage.setItem('fb', JSON.stringify(fb));
        console.log(fb);
        return dispatch({type: 'FACEBOOK_LOGIN_SUCCESS', payload: fb});
    } catch (err) {
        console.log(await err.json())
        return dispatch({type: 'FACEBOOK_LOGIN_FAIL'});
    }
};
