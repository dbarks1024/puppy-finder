import React from 'react';
import { Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { Icon } from 'native-base';
import SwipeDogSelect from './components/SwipeDogSelect';
import Settings from './components/Settings';
import BreedList from './components/settings/BreedList';
import MyDogs from './components/MyDogs';
import ShowDog from './components/ShowDog';
import DogSize from './components/settings/DogSize';
import DogGender from './components/settings/DogGender';
import Location from './components/settings/Location';
import DogAge from './components/settings/DogAge';

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
                    <Scene key="mydogs" title="My Dogs" icon={TabIcon}>
                        <Scene
                        key='myDogs'
                        component={MyDogs}
                        title='My Dogs'
                        initial
                        />
                        <Scene
                        key='showDog'
                        component={ShowDog}
                        hideNavBar
                        />
                    </Scene>    
                    <Scene key="search" title="Search" icon={() => <Icon name='search' />} initial>
                        <Scene 
                        key='swipeDogSelect' 
                        component={SwipeDogSelect} 
                        title='Pick Your Pup' 
                        initial
                        /> 
                    </Scene>
                    <Scene key="settingsTab" title="Settings" icon={() => <Icon name='settings' />}>
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
                        <Scene 
                        key='dogSize'
                        component={DogSize}
                        title='Size'
                        />   
                        <Scene 
                        key='dogGender'
                        component={DogGender}
                        title='Gender'
                        /> 
                        <Scene 
                        key='location'
                        component={Location}
                        title='Location'
                        /> 
                        <Scene 
                        key='dogAge'
                        component={DogAge}
                        title='Age'
                        /> 
                    </Scene>     
                </Scene> 
            </Scene>
        </Router>
    );
};

export default RouterComponent;
