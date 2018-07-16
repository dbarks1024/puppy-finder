import React, { Component } from 'react';
import { ListItem, CheckBox, Text, Body } from 'native-base';

class BreedList extends Component {
    render() {
        return (
            <ListItem>
                <CheckBox checked={false} />
                <Body>
                    <Text>{this.props.breed}</Text>
                </Body>
            </ListItem>
        );
    }
}

export default BreedList;
