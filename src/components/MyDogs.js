import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Text, Left, List, ListItem, Thumbnail, Body, Content } from 'native-base';
import { removeDog, addDog } from '../actions';

class MyDogs extends Component {
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
            renderItem={({ dog }) => {
                return (
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: dog.photo }} />
                        </Left>
                        <Body>
                            <Text>{dog.name}</Text>
                            <Text note>Breed</Text>
                        </Body>
                    </ListItem>
                );
            }}
            keyExtractor={item => item.id}
            />
        );
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>  
                        {this.renderList()}      
                    </List>
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
