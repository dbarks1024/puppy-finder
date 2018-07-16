import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SwipeDogSelect from './components/SwipeDogSelect';
import Settings from './components/Settings';
import BreedList from './components/settings/BreedList';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key='main' >
                <Scene 
                key='swipeDogSelect' 
                component={SwipeDogSelect} 
                title='Pick Your Pup' 
                leftTitle='Settings'
                onLeft={() => Actions.settings()}
                /> 
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
        </Router>
    );
};

export default RouterComponent;
