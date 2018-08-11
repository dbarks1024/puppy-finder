import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Text, Icon, Left, Right, Thumbnail, Body, Content, SwipeRow, Button, View } from 'native-base';
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
                    <SwipeRow 
                    disableRightSwipe
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    onPress={() => this.onRowPress({ dog: item })}
                    body={
                      <View
                      style={{ flex: 1, flexDirection: "row" }}
                      >
                        <TouchableOpacity
                         onPress={() => this.onRowPress({ dog: item })}
                         style={{ flex: 1, flexDirection: "row" }}
                        >
                          <Left
                          style={{ paddingLeft: 10 }}
                          >
                              <Thumbnail 
                              source={{ uri: item.photos[1].$t }} 
                              square
                              />
                          </Left>
                          <Body
                          style={{ alignSelf: 'flex-start' }}
                          >
                              <Text>{item.name}</Text>
                              <Text note>{item.breed}</Text>
                          </Body>
                          <Right>
                              <Icon name='arrow-forward' />
                          </Right>
                        </TouchableOpacity>
                      </View>
                    }
                    right={
                      <Button danger onPress={() => console.log('Trash')}>
                        <Icon active name="trash" />
                      </Button>
                    }
                    />
                    
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
