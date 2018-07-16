import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Text, Header, Content, Card, CardItem, Icon, Right } from 'native-base';

class Settings extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        <CardItem button onPress={() => Actions.breedList()}>
                            <Text>Breeds</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Settings;
