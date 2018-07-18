import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Left, Right, Body } from 'native-base';
import { Actions } from 'react-native-router-flux'; 
import { connect } from 'react-redux';
import { removeDog, addDog, findDogById } from '../actions';

class ShowDog extends Component {
    // componentWillMount() {
    //     this.props.findDogById(this.props.dog.dog.id);
    // }
    renderStatus(status) {
        if (status === 'A') {
            return (
                <Text>Adoptable</Text>
            );
        } 
        return (
            <Text>May be too late</Text>
        );       
    }

    render() {
        const { dog } = this.props.dog;
        return (
            <Container>           
                <Content>
                    <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                        <Thumbnail source={{ uri: dog.photos[0].$t }} />
                        <Body>
                            <Text>{dog.name}</Text>
                            <Text note>{dog.breed}</Text>
                        </Body>
                        </Left>
                        <Right>
                            {this.renderStatus(dog.status)}
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Image source={{ uri: dog.photos[3].$t }} style={{ height: 350, width: 350, flex: 1 }} />
                        <Text>
                            {dog.description}
                        </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                        <Button
                        onPress={() => {
                            Actions.pop();
                            this.props.removeDog(dog.id);
                        }}
                        danger 
                        textStyle={{ color: '#87838B' }}
                        >
                            <Text>Say Goodby</Text>
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
