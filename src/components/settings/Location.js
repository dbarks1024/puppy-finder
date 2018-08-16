import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Label, Form, Icon } from 'native-base';
import { changeLocation } from '../../actions';

class Location extends Component {

    isChecked(gender) {
        if(gender === this.props.gender) {
            return true;
        }
        return false;
    }

    isSuccess() {
        if(this.props.location.length === 5) {
            return true;
        }
        return false;
    }

    renderSuccessIcon() {
        if(this.props.location.length === 5) {
            return (
                <Icon name='checkmark-circle' />
            );
        }
        return false;
    }

    render() {
        return (    
            <Container>
                <Content>
                    <Form>
                        <Item 
                        floatingLabel
                        success={this.isSuccess()}
                        >
                            <Label>Zip Code</Label>
                            <Input
                            maxLength={5}
                            onChangeText={(zip) => this.props.changeLocation(zip)}
                            value={this.props.location}
                            />
                            {this.renderSuccessIcon()}
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.settings.location
    };
};

export default connect(mapStateToProps, { changeLocation })(Location);
