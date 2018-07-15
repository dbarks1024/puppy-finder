import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const SwipeDogItem = ({ dog, breed }) => {
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
            <Icon name="heart" style={{ color: '#ED4A6A' }} />
            <Text>{dog.name.$t}</Text>
        </CardItem>
    </Card>
    );
};

export default SwipeDogItem;
