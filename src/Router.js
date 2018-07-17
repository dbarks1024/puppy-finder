import React from 'react';
import { Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SwipeDogSelect from './components/SwipeDogSelect';
import Settings from './components/Settings';
import BreedList from './components/settings/BreedList';

const TabIcon = ({ selected, title }) => {
    return (
      <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
    );
  };


const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar >
                <Scene 
                key='tabbar'
                tabs
                tabBarStyle={{ backgroundColor: '#FFFFFF' }} 
                >
                    <Scene key="search" title="Search" icon={TabIcon}>
                        <Scene 
                        key='swipeDogSelect' 
                        component={SwipeDogSelect} 
                        title='Pick Your Pup' 
                        leftTitle='Settings'
                        onLeft={() => Actions.settings()}
                        /> 
                    </Scene>
                    <Scene key="settings" title="Settings" icon={TabIcon}>
                        <Scene
                        key='settings'
                        component={Settings}
                        title='Settings'
                        initial
                        />
                        <Scene 
                        key='breedList'
                        component={BreedList}
                        title='Breeds'
                        />   
                    </Scene>     
                </Scene> 
            </Scene>
        </Router>
    );
};

export default RouterComponent;
