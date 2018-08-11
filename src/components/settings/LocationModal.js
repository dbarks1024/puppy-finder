import React, { Component } from 'react';
import Modal from "react-native-modal";
import { connect } from 'react-redux';
import { View, Text } from 'native-base';
import Location from './Location';

class LocationModal extends Component {
  render() {
      return ( 
        <View>
          <Modal
          animationIn='slideInLeft'
          transparent
          isVisible
          onRequestClose={() => {}}
          style={styles.containerStyle}
          >
            <View style={styles.cardStyle} >
              <Text>Please input a valid zip code</Text>
              <Location />
            </View>
          </Modal>
        </View>   
      );
  }
}

const styles = {
  containerStyle: {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  },
  cardStyle: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
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
