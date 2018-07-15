import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, View, DeckSwiper, Text, Spinner } from 'native-base';
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

    renderDeckSwiper() {
        if (this.props.dogs === undefined) {
            return (
                <Text>No dogs found</Text>
            );   
        } else if (this.props.findingDogs) {
            return (<Spinner />);
        }
        return (
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
        );
    }

    render() {
        console.log(this.props.findingDogs);
        return (
            <Container>
                <View>
                    {this.renderDeckSwiper()}
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { 
        dogs: state.dogsReducer.dogs.pet, 
        findingDogs: state.dogsReducer.findingDogs
    };
};

export default connect(mapStateToProps, { findDogs })(SwipeDogSelect);
