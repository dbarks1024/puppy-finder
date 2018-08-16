import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Radio, Text, Left, Right, ListItem } from 'native-base';
import { changeAge } from '../../actions';

class DogAge extends Component {

    isChecked(age) {
        if(age === this.props.age) {
            return true;
        }
        return false;
    }

    render() {
        return (    
            <Container>
                <Content>
                    <ListItem
                    onPress={() => this.props.changeAge('any')}
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
                    onPress={() => this.props.changeAge('Baby')}
                    >
                        <Left>
                            <Text>Baby</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('Baby')} 
                            />
                        </Right>
                    </ListItem>
                    <ListItem
                    onPress={() => this.props.changeAge('Young')}
                    >
                        <Left>
                            <Text>Young</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('Young')}  
                            />
                        </Right>
                    </ListItem>
                    <ListItem
                    onPress={() => this.props.changeAge('Adult')}
                    >
                        <Left>
                            <Text>Adult</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('Adult')}  
                            />
                        </Right>
                    </ListItem>
                    <ListItem
                    onPress={() => this.props.changeAge('Senior')}
                    >
                        <Left>
                            <Text>Senior</Text>
                        </Left>
                        <Right>
                            <Radio 
                            selected={this.isChecked('Senior')}  
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
        age: state.settings.age
    };
};

export default connect(mapStateToProps, { changeAge })(DogAge);
