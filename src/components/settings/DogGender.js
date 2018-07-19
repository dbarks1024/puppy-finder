import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Radio, Text, Left, Right, ListItem } from 'native-base';
import { changeSize, changeGender } from '../../actions';

class DogGender extends Component {

    isChecked(gender) {
        if(gender === this.props.gender) {
            return true;
        }
        return false;
    }

    render() {
        return (    
            <Container>
                <Content>
                    <ListItem
                    onPress={() => this.props.changeGender('either')}
                    >
                        <Left>
                            <Text>Either</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('either')} 
                            />
                        </Right>
                    </ListItem>
                    <ListItem
                    onPress={() => this.props.changeGender('F')}
                    >
                        <Left>
                            <Text>Female</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('F')} 
                            />
                        </Right>
                    </ListItem>
                    <ListItem
                    onPress={() => this.props.changeGender('M')}
                    >
                        <Left>
                            <Text>Male</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('M')}  
                            />
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gender: state.settings.gender
    };
};

export default connect(mapStateToProps, { changeSize, changeGender })(DogGender);
