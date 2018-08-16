import React from 'react';
import { ListItem, CheckBox, Text, Body } from 'native-base';
import { connect } from 'react-redux';
import { updateBreeds } from '../../actions';

class BreedListItem extends React.PureComponent {
  isChecked(breedArray, breedName) {
    if (breedArray.length === 249) {
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
        onPress={() => {
          this.props.updateBreeds(breedName);
          this.forceUpdate();
        }}
        />
        <Body>
          <Text>{breedName}</Text>
        </Body>
      </ListItem>
    );
  }
}

const mapStateToProps = state => {
  return { 
    selectedBreeds: state.settings.selectedBreeds
  };
};

export default connect(mapStateToProps, { updateBreeds })(BreedListItem);
