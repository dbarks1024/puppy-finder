import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, View, DeckSwiper } from 'native-base';
import { findDogs } from '../actions';
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

    render() {
        return (
            <Container>
                <View>
                    <DeckSwiper 
                    dataSource={this.props.dogs} 
                    renderItem={dog => {
                        return (
                            <SwipeDogItem 
                            dog={dog} 
                            breed={this.dogBreedString(dog.breeds.breed)} 
                            />
                        );
                    }}
                    />
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    if (state.dogs.petfinder.pets.pet === 'undefined') {
        return { dogs: '' };
    }
    return { dogs: state.dogs.petfinder.pets.pet };
};

export default connect(mapStateToProps, { findDogs })(SwipeDogSelect);
