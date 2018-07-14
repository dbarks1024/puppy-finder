import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SwipeDogSelect from './components/SwipeDogSelect';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='main' >
                <Scene 
                key='swipeDogSelect' 
                component={SwipeDogSelect} 
                title='Pick Your Pup' 
                initial
                /> 
            </Scene>
        </Router>
    );
};

export default RouterComponent;
