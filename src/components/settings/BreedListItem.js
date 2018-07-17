import React, { Component } from 'react';
import { ListItem, CheckBox, Text, Body } from 'native-base';
import { connect } from 'react-redux';
import { updateBreeds } from '../../actions';

class BreedList extends Component {
    isChecked(breedArray, breedName, override) {
        if (override === true) {
            return true;
        }
        if (breedArray.indexOf(breedName) === -1) {
            return false;
        } 
        return true;      
    }

    render() {
        const breedName = this.props.breed;

        return (
            <ListItem>
                <CheckBox 
                checked={this.isChecked(this.props.selectedBreeds, breedName)}
                color='blue' 
                onPress={() => {
                    this.props.updateBreeds(breedName);
                    console.log(CheckBox);
                }}
                />
                <Body>
                    <Text>{breedName}</Text>
                </Body>
            </ListItem>
        );
    }
}

// const mapStateToProps = state => {
//     return { 
//         selectedBreeds: state.settings.selectedBreeds
//      };
//   };

export default connect({}, { updateBreeds })(BreedList);
