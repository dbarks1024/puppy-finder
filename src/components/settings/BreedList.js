import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, Text, View, Item, Input, Icon } from 'native-base';
import BreedListItem from './BreedListItem';
import { addAllBreeds, clearAllBreeds, searchBreeds } from '../../actions';

class BreedList extends Component {
    render() {
        return (    
            <Container>
                <Content>
                    <View
                    style={{ flexDirection: 'row', justifyContent: 'space-around' }}
                    >
                        <Button
                        onPress={() => this.props.addAllBreeds()}
                        ><Text>Select All</Text></Button>
                        <Button
                        onPress={() => this.props.clearAllBreeds()}
                        ><Text>Clear All</Text></Button>
                    </View>
                    <Item>
                      <Icon name="ios-search" />
                      <Input 
                      placeholder="Search"
                      onChangeText={(text) => this.props.searchBreeds(text)}
                      />
                    </Item>
                    <FlatList 
                    extraData={this.props.selectedBreeds}
                    data={this.props.breeds}
                    renderItem={({ item }) => <BreedListItem breed={item.$t} />}
                    keyExtractor={item => item.$t}
                    />
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        breeds: state.breeds.breed,
        selectedBreeds: state.settings.selectedBreeds
    };
};

export default connect(mapStateToProps, { addAllBreeds, clearAllBreeds, searchBreeds })(BreedList);
