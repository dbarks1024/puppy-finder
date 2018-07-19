import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, View, DeckSwiper, Text, Spinner, Button, Icon } from 'native-base';
import { findDogs, addDog, blacklistDog } from '../actions';
import SwipeDogItem from './SwipeDogItem';

class SwipeDogSelect extends Component {
    componentWillMount() {
        this.props.findDogs();   
    }
   
    dogBreedString(breed) {
        if (Array.isArray(breed)) {
            let breedString = '';
            for (let i = 0; i < breed.length; i++) {
                breedString += `${breed[i].$t}, `;
            }
            return breedString.slice(0, -2);      
        }
        return breed.$t; 
    }

    renderDeckSwiper() {
        if (this.props.findingDogs || typeof this.props.dogs === 'string') {
            return (<Spinner color='black' />);
        } else if (this.props.dogs === undefined) {
            return (
                <Text>No dogs found.</Text>
            );   
        } 
        return (
            <DeckSwiper 
            ref={mr => (this._deckSwiper = mr)}
            dataSource={this.props.dogs} 
            renderItem={dog => {
                return (
                    <SwipeDogItem 
                    dog={dog} 
                    breed={this.dogBreedString(dog.breeds.breed)} 
                    />
                );
            }}
            renderEmpty={() => <Text>No dogs found. Try less filters.</Text>}
            onSwipeRight={(dog) => { this.props.addDog(dog); }}
            onSwipeLeft={(dog) => { this.props.blacklistDog(dog.id.$t); }}
            loop='false'
            />
        );
    }
    
    render() {
        return (
            <Container>
                <View>
                    {this.renderDeckSwiper()}
                </View>
                <View
                style={{
                    flexDirection: "row",
                    flex: 1,
                    position: "absolute",
                    bottom: 50,
                    left: 0,
                    right: 0,
                    justifyContent: "space-between",
                    padding: 15
                }}
                >
                    <Button 
                    iconLeft 
                    onPress={() => {
                        this.props.blacklistDog(this._deckSwiper._root.state.selectedItem.id.$t);
                        this._deckSwiper._root.swipeLeft();
                    }}
                    >
                        <Icon name="arrow-back" />
                        <Text>Swipe Left</Text>
                    </Button>
                    <Button 
                    iconRight 
                    onPress={() => {
                        this.props.addDog(this._deckSwiper._root.state.selectedItem);
                        this._deckSwiper._root.swipeLeft();
                        console.log(this._deckSwiper._root);
                        }
                    }
                    >
                        <Text>Swipe Right</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { 
        dogs: state.findDogsReducer.dogs,
        findingDogs: state.findDogsReducer.findingDogs
    };
};

export default connect(mapStateToProps, { findDogs, addDog, blacklistDog })(SwipeDogSelect);
