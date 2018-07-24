import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Text, Icon, Left, Right, ListItem, Thumbnail, Body, Content } from 'native-base';
import { removeDog, addDog } from '../actions';

class MyDogs extends Component {
onRowPress(dog) {
    Actions.showDog({ dog });
}

renderList() {
        if (this.props.myDogs.lendth === 0) {
            return (
                <Text>You have no saved dogs</Text>
            );
        }
        return (
            <FlatList 
            extraData={this.props.myDogs}
            data={this.props.myDogs}
            renderItem={({ item }) => {
                return (
                    <ListItem 
                    avatar
                    onPress={() => this.onRowPress({ dog: item })}
                    >
                        <Left>
                            <Thumbnail 
                            source={{ uri: item.photos[1].$t }} 
                            square
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.breed}</Text>
                        </Body>
                        <Right>
                            <Icon name='arrow-forward' />
                        </Right>
                    </ListItem>
                );
            }}
            ListEmptyComponent={() => <Text>You have no dogs</Text>}
            keyExtractor={item => item.id}
            />
        );
    }

    render() {
        return (
            <Container>
                <Content>
                    {this.renderList()}      
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { 
        myDogs: state.dogs.myDogs 
    };
};

export default connect(mapStateToProps, { removeDog, addDog })(MyDogs);
