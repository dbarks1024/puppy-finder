import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Text, Content, Left, ListItem, Icon, Right, List, View } from 'native-base';

class Settings extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List >
                        <ListItem button onPress={() => Actions.breedList()}>
                            <Left>
                                <Text>Breeds</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button onPress={() => Actions.dogSize()}>
                            <Left>
                                <Text>Size</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button onPress={() => Actions.dogGender()}>
                            <Left>
                                <Text>Gender</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button onPress={() => Actions.location()}>
                            <Left>
                                <Text>Location</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button onPress={() => Actions.dogAge()}>
                            <Left>
                                <Text>Age</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                   
                </Content>
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>Powered by PetFinder</Text>
                </View>
            </Container>
        );
    }
}

export default Settings;
