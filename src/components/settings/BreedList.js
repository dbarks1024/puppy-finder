import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, Text } from 'native-base';
import BreedListItem from './BreedListItem';
import { addAllBreeds, clearAllBreeds } from '../../actions';

class BreedList extends Component {
    render() {
        return (    
            <Container>
                <Content>
                    <Button
                    onPress={() => this.props.addAllBreeds()}
                    ><Text>Select All</Text></Button>
                    <Button
                    onPress={() => this.props.clearAllBreeds()}
                    ><Text>Clear All</Text></Button>
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

export default connect(mapStateToProps, { addAllBreeds, clearAllBreeds })(BreedList);
