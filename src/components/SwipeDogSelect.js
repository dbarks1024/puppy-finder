import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, View, Text, Spinner, Button, Icon } from 'native-base';
import Swiper from 'react-native-deck-swiper';
import { findDogs, addDog, blacklistDog } from '../actions';
import SwipeDogItem from './SwipeDogItem';

class SwipeDogSelect extends Component {
    componentWillMount() {
        this.props.findDogs();   
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.blacklist !== this.props.blacklist) {
            return false;
        } 
        return true;
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

    filterDogs() {
        const { dogs, gender, selectedBreeds, blacklist, size } = this.props;
        return dogs.filter((pet) => {
            return blacklist.indexOf(pet.id.$t) === -1 &&
                (selectedBreeds > 248 || Object.values(pet.breeds.breed).filter(val => !selectedBreeds.includes(val)).length < 1) &&
                (gender === 'either' || pet.gender.$t === gender) &&
                (size === 'any' || pet.size.$t === size);
        });
    }

    renderDeckSwiper() {
        console.log(this.props.dogs);
        if (this.props.findingDogs || typeof this.props.dogs === 'string') {
            return (<Spinner color='black' />);
        } else if (this.props.dogs === undefined) {
            return (
                <Text>No dogs found.</Text>
            );   
        } 
        return (
            <Swiper 
            ref={swiper => { 
                this.swiper = swiper; 
            }}
            cards={this.filterDogs()} 
            renderCard={dog => {
                return (
                    <SwipeDogItem 
                    dog={dog} 
                    breed={this.dogBreedString(dog.breeds.breed)} 
                    />
                );
            }}
            // renderEmpty={() => {
            //     return (<Text>No dogs found. Try less filters or refreshing.</Text>);
            // }}
            onSwipedRight={(index) => this.props.addDog(this.swiper.state.cards[index])}
            onSwipedLeft={(index) => this.props.blacklistDog(this.swiper.state.cards[index].id.$t)}
            disableBottomSwipe	
            disableTopSwipe
            //loop={false}
            />
        );
    }
    
    render() {
        console.log(this.swiper);
        return (
            <Container>
                <View>
                    {this.renderDeckSwiper()}
                </View>
                <View
                style={styles.buttonViewStyles}
                >
                    <Button 
                    style={styles.buttonsStyles}
                    rounded
                    large
                    onPress={() => {
                       // this.props.blacklistDog(this.swiper._root.state.selectedItem.id.$t);
                        this.swiper.swipeLeft();
                    }}
                    >
                        <Icon style={styles.buttonIconStyles} name="close" fontSize='40' color='red' />
                    </Button>
                    <Button
                    warning
                    rounded
                    style={styles.buttonsStyles}
                    large
                    onPress={() => this.props.findDogs()}
                    >
                        <Icon style={styles.buttonIconStyles} name='refresh' />
                    </Button>
                    <Button 
                    rounded
                    style={styles.buttonsStyles}
                    large
                    danger
                    color='red'
                    onPress={() => {
                       // this.props.addDog(this._deckSwiper._root.state.selectedItem);
                        this.swiper.swipeRight();
                        }
                    }
                    >
                        <Icon style={styles.buttonIconStyles} color='red' name="heart" active />
                    </Button>
                </View>
            </Container>
        );
    }
}

const styles = {
    buttonsStyles: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 75,
        borderRadius: 100,
        marginTop: 100,
    },
    buttonViewStyles: {
        flexDirection: "row",
        flex: 1,
        position: "absolute",
        bottom: 15,
        left: 15,
        right: 15,
        justifyContent: "space-between",
        padding: 15
    },
    buttonIconStyles: {
        fontSize: 45,
    }
};

const mapStateToProps = state => {
    const { selectedBreeds, gender, size } = state.settings;
    const { dogs, findingDogs } = state.findDogsReducer;
    const { blacklist } = state.dogs;
    return { 
        dogs,
        findingDogs,
        blacklist,
        selectedBreeds,
        gender,
        size
    };
};

export default connect(mapStateToProps, { findDogs, addDog, blacklistDog })(SwipeDogSelect);
