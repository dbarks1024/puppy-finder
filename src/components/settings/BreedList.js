import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import BreedListItem from './BreedListItem';

class BreedList extends Component {
    render() {
        return (
            <Container>
                <Content>
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

export default connect(mapStateToProps)(BreedList);
