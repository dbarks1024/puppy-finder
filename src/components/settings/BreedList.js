import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import BreedListItem from './BreedListItem';

class BreedList extends Component {
    render() {
        console.log(this.props.breeds);
        return (
            <Container>
                <Content>
                    <FlatList 
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
        breeds: state.breeds.breed
    };
};

export default connect(mapStateToProps)(BreedList);
