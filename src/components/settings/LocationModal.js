import React, { Component } from 'react';
import Modal from "react-native-modal";
import { connect } from 'react-redux';
import { View, Text, Container } from 'native-base';
import Location from './Location';

class LocationModal extends Component {
  render() {
      return ( 
        <View
        style={styles.containerStyle}
        >
          <Modal
          animationIn='slideInLeft'
          transparent
          isVisible
          onRequestClose={() => {}}
          >
            <View style={styles.cardStyle} >
              <Container>
                <Text>Please input a valid zip code</Text>
                <Location />
              </Container>
            </View>
          </Modal>
        </View>   
      );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  cardStyle: {
    backgroundColor: "white",
    border: 20,
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: 300
  }
};

const mapStateToProps = (state) => {
    return {
        location: state.settings.location
    };
};

export default connect(mapStateToProps)(LocationModal);
