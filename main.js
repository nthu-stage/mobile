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

console.ignoredYellowBox = ['Warning: View.propTypes'];

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
            newsStack: {
                screen: StackNavigator({
                    news: {
                        screen: NewsScreen
                    },
                    workshopNewsShow: {
                        screen: WorkshopShowScreen
                    },
                    ideaNewsShow: {
                        screen: IdeaShowScreen
                    }
                }, {headerMode: 'none'})
            },
            profileStack: {
                screen: StackNavigator({
                    profile: {
                        screen: ProfileScreen
                    },
                    workshopListStack: {
                        screen: StackNavigator({
                            workshopList: {
                                screen: WorkshopListScreen
                            },
                            workshopListShow: {
                                screen: WorkshopShowScreen
                            }
                        }, {headerMode: 'none'})
                    },
                    ideaListStack: {
                        screen: StackNavigator({
                            ideaList: {
                                screen: IdeaListScreen
                            },
                            ideaListShow: {
                                screen: IdeaShowScreen
                            }
                        }, {headerMode: 'none'})
                    }
                }, {headerMode: 'none'})
            }
        }, {
            lazy: true,
            tabBarOptions: {
                activeTintColor: '#FF5964',
                inactiveTintColor: '#A4A9AD'
            }
        })
    }
}, {
    navigationOptions: {
        tabBarVisible: false
    },
    lazy: true
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

const initialState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'idea'}));
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
