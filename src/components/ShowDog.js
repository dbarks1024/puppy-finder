import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { connect } from 'react-redux';
import { removeDog, addDog, findDogById } from '../actions';

class ShowDog extends Component {
    componentWillMount() {
        this.props.findDogById(this.props.dog.dog.id);
    }
    render() {
        return (
            <Container>           
                <Content>
                    <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                        <Thumbnail source={{ uri: this.props.dog.dog.image }} />
                        <Body>
                            <Text>{this.props.dog.name}</Text>
                            <Text note>{this.props.dog.dog.breed}</Text>
                        </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Image source={{ uri: this.props.dog.image }} style={{ height: 200, width: 200, flex: 1 }} />
                        <Text>
                            //Your text here
                        </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                        <Button transparent textStyle={{ color: '#87838B' }}>
                            <Icon name="heart" />
                            <Text>1,926 stars</Text>
                        </Button>
                        </Left>
                    </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default connect(null, { removeDog, addDog, findDogById })(ShowDog);
