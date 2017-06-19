import Expo, {Notifications} from 'expo';
import React, {Component} from 'react';

import {StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

import {Provider, connect} from 'react-redux';

import {TabNavigator, StackNavigator, NavigationActions, addNavigationHelpers} from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WorkshopScreen from './screens/WorkshopScreen';
import WorkshopShowScreen from './screens/WorkshopShowScreen';
import IdeaScreen from './screens/IdeaScreen';
import IdeaShowScreen from './screens/IdeaShowScreen';
import NewsScreen from './screens/NewsScreen';
import ProfileScreen from './screens/ProfileScreen';
import WorkshopListScreen from './screens/WorkshopListScreen';
import IdeaListScreen from './screens/IdeaListScreen';
import reducers from './reducers';

import getStore from './reducers/index'

export const AppNavigator = TabNavigator({
    auth: {
        screen: AuthScreen
    },
    main: {
        screen: TabNavigator({
            workshopStack: {
                screen: StackNavigator({
                    workshop: {
                        screen: WorkshopScreen
                    },
                    workshopShow: {
                        screen: WorkshopShowScreen
                    }
                }, {headerMode: 'none'})
            },
            ideaStack: {
                screen: StackNavigator({
                    idea: {
                        screen: IdeaScreen
                    },
                    ideaShow: {
                        screen: IdeaShowScreen
                    }
                }, {headerMode: 'none'})
            },
            news: {
                screen: NewsScreen
            },
            profileStack: {
                screen: StackNavigator({
                    profile: {
                        screen: ProfileScreen
                    },
                    proposeWorkshopList: {
                        screen: WorkshopListScreen
                    },
                    attendWorkshopList: {
                        screen: WorkshopListScreen
                    },
                    comeUpWithIdeaList: {
                        screen: IdeaListScreen
                    },
                    likeIdeaList: {
                        screen: IdeaListScreen
                    }
                }, {headerMode: 'none'})
            }
        })
    }
}, {
    navigationOptions: {
        tabBarVisible: false
    }
});

class AppWithStyleAndNavigator extends Component {
    render() {
        const {dispatch, nav} = this.props;
        return (
            <StyleProvider style={getTheme(platform)}>
                <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
            </StyleProvider>
        );
    }
}

function mapStateToProps({nav}) {
    return {nav};
}

const AppWithNavState = connect(mapStateToProps)(AppWithStyleAndNavigator);


const initialState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'comeUpWithIdeaList'}));
export const nav = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

const store = getStore(nav);


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavState/>
            </Provider>
        );
    }
}

Expo.registerRootComponent(App);
