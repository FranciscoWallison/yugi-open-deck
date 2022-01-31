
import React, { Component } from "react";
import { Platform, StyleSheet, View, Image, TouchableOpacity, Alert, Text } from "react-native";


const ButtonFloating = props => {

  const {
    visibleBtn,
    favoriteCard,
    ...attributes
  } = props;


  if (visibleBtn) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            console.log('favoriteCard')
            favoriteCard()
          }}
          style={styles.TouchableOpacityStyle}
        >
          <Image source={require('../assets/uteis/favorite_black.png')}  style={styles.FloatingButtonStyle} />
        </TouchableOpacity>
      </View>     
    );
  }else{
    return (<View/>);
  }
}

export default ButtonFloating;


 const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
    // marginTop: 200,
    fontWeight: 'bold'
  },
  TouchableOpacityStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    padding: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#398458',
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 45,
    height: 45,
  },
  offSelect: {
    backgroundColor: '#15a651e3'
  }

});
