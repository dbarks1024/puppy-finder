import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, View, Text, Spinner, Button, Icon } from 'native-base';
import Swiper from 'react-native-deck-swiper';
import { Actions } from 'react-native-router-flux';
import { findDogs, addDog, blacklistDog } from '../actions';
import SwipeDogItem from './SwipeDogItem';
import LocationModal from './settings/LocationModal';

class SwipeDogSelect extends Component {
    componentWillMount() {
        this.props.findDogs();   
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.location.length === 5 &&
        (nextProps.selectedBreeds !== this.props.selectedBreeds || 
        nextProps.gender !== this.props.gender ||
        nextProps.size !== this.props.size ||
        nextProps.age !== this.props.age ||
        nextProps.location !== this.props.location)) {
          this.props.findDogs();
        }
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

    renderDeckSwiper() {
        if (this.props.findingDogs || typeof this.props.dogs === 'string') {
            return (<Spinner color='black' />);
        } else if(this.props.error) {
          return (
            <Text>{this.props.error}</Text> 
          );
        } else if (this.props.dogs === undefined) {
            return (
                <Text>No dogs found. Try changing your refreshing or changing your settings.</Text>
            );   
        } 
        return (
            <Swiper 
            cardStyle={styles.swiperCardStyles}
            stackSize={3}
            ref={swiper => { 
                this.swiper = swiper; 
            }}
            cards={this.props.dogs} 
            renderCard={dog => {
                return (
                    <SwipeDogItem 
                    dog={dog} 
                    breed={this.dogBreedString(dog.breeds.breed)} 
                    />
                );
            }}
            onSwipedRight={(index) => this.props.addDog(this.swiper.state.cards[index])}
            onSwipedLeft={(index) => this.props.blacklistDog(this.swiper.state.cards[index].id.$t)}
            disableBottomSwipe	
            disableTopSwipe
            loop={false}
            />
        );
    }
    
    renderLocationModal() {
      if(this.props.location.length < 5 && Actions.currentScene === 'swipeDogSelect') {
        return(
          <LocationModal />
        );
      }
    }
    
    render() {
        return (
            <Container>
                {this.renderLocationModal()}
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
        width: 65,
        height: 65,
        borderRadius: 75,
        marginTop: 100,
    },
    buttonViewStyles: {
        flexDirection: "row",
        flex: 1,
        position: "absolute",
        bottom: 10,
        left: 15,
        right: 15,
        justifyContent: "space-between",
        padding: 15
    },
    buttonIconStyles: {
        fontSize: 45,
    },
    swiperCardStyles: { 
        top: 5, 
        left: 5, 
        right: 5, 
        flex: 1, 
        width: '100%', 
        height: 450 
    }
};

const mapStateToProps = state => {
    const { selectedBreeds, gender, size, age, location } = state.settings;
    const { dogs, findingDogs, error } = state.findDogsReducer;
    const { blacklist } = state.dogs;
    return { 
        dogs,
        findingDogs,
        blacklist,
        selectedBreeds,
        gender,
        size,
        age,
        location,
        error
    };
};

export default connect(mapStateToProps, { findDogs, addDog, blacklistDog })(SwipeDogSelect);
