import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

class SwipeDogItem extends Component {
    
    render() {
        const { dog, breed } = this.props;
        return (
        <Card style={{ elevation: 3 }}>
            <CardItem>
            <Left>
                <Thumbnail source={{ uri: dog.media.photos.photo[3].$t }} />
                <Body>
                    <Text>{dog.name.$t}</Text>
                    <Text note> {breed} </Text>
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
                <Text>{dog.age.$t}</Text>
            </CardItem>
        </Card>
        );
    }
}

export default SwipeDogItem;
