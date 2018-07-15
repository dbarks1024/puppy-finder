import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, View, DeckSwiper, Card, 
    CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { findDogs } from '../actions';


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
                    renderItem={dog =>
                        <Card style={{ elevation: 3 }}>
                          <CardItem>
                            <Left>
                              <Thumbnail source={{ uri: dog.media.photos.photo[3].$t }} />
                              <Body>
                                <Text>{dog.name.$t}</Text>
                                <Text note> {this.dogBreedString(dog.breeds.breed)} </Text>
                              </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                            <Image 
                            style={{ height: 300, flex: 1 }} 
                            source={{ uri: dog.media.photos.photo[3].$t }} 
                            />
                          </CardItem>
                          <CardItem>
                            <Icon name="heart" style={{ color: '#ED4A6A' }} />
                            <Text>{dog.name.$t}</Text>
                          </CardItem>
                        </Card>
                      }
                    />
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { dogs: state.dogs.petfinder.pets.pet };
};

export default connect(mapStateToProps, { findDogs })(SwipeDogSelect);
