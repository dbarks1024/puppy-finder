import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Left, Right, Body, Tabs, Tab, List } from 'native-base';
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
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Tabs>
                            <Tab heading="Description">
                                <CardItem>
                                    <Body>
                                        <Text>
                                            {dog.description}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Tab>
                            <Tab heading="Details">
                                <CardItem>
                                    <Body>
                                        <Text>
                                            Sex: {dog.sex}
                                        </Text>
                                        <Text>
                                            Age: {dog.age}
                                        </Text>
                                        <Text>
                                        About: 
                                        </Text>
                                        <List
                                        dataArray={dog.options}
                                        renderRow={(item) =>                                          
                                            <Text>
                                                {item.$t}
                                            </Text>
                                        }
                                        />                                           
                                    </Body>
                                </CardItem>
                            </Tab>
                            <Tab heading="Contact">
                                <CardItem>
                                    <Body>
                                        <Text>{dog.contact.phone.$t && dog.contact.phone.$t}</Text>
                                        <Text>{dog.contact.email.$t && dog.contact.email.$t}</Text>
                                        <Text>{dog.contact.city.$t && dog.contact.city.$t}</Text>
                                        <Text>{dog.contact.state.$t && dog.contact.state.$t}</Text>
                                    </Body>
                                </CardItem>
                            </Tab>
                        </Tabs>
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
