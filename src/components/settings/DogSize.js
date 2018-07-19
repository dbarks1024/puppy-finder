import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Radio, Text, Left, Right, ListItem } from 'native-base';
import { changeSize } from '../../actions';

class DogSize extends Component {

    isChecked(size) {
        if(size === this.props.size) {
            return true;
        }
        return false;
    }

    render() {
        return (    
            <Container>
                <Content>
                    <ListItem
                    onPress={() => this.props.changeSize('any')}
                    >
                        <Left>
                            <Text>Any</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('any')} 
                            />
                        </Right>
                    </ListItem>
                    <ListItem
                    onPress={() => this.props.changeSize('S')}
                    >
                        <Left>
                            <Text>Small</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('S')} 
                            />
                        </Right>
                    </ListItem>
                    <ListItem
                    onPress={() => this.props.changeSize('M')}
                    >
                        <Left>
                            <Text>Medium</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('M')}  
                            />
                        </Right>
                    </ListItem>
                    <ListItem
                    onPress={() => this.props.changeSize('L')}
                    >
                        <Left>
                            <Text>Large</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('L')}  
                            />
                        </Right>
                    </ListItem>
                    <ListItem
                    onPress={() => this.props.changeSize('XL')}
                    >
                        <Left>
                            <Text>Extra Large</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('XL')}  
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
        size: state.settings.size
    };
};

export default connect(mapStateToProps, { changeSize })(DogSize);
