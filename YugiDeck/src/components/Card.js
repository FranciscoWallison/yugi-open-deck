import React, { Component } from 'react';
import {
  View,
  Modal,
  Text,
  ActivityIndicator
} from 'react-native';

import styles from '../styles/Loader.style'
const card1 = 'https://i.pinimg.com/736x/b6/76/3b/b6763baee8b2b944b3287147c7d26c55.jpg';
const card2 = 'https://i.pinimg.com/736x/dc/79/08/dc790805ea23fbf33283d488b2c847ce--card-games-copycat.jpg"';
const card3 = 'https://images-na.ssl-images-amazon.com/images/I/51U3Ky9-N4L.jpg';


const Loader = props => {
  const {
    loading,
    message,
    ...attributes
  } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      >
      <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.front}></View>
            <View style={styles.back}>
                <Image
                    resizeMode="contain"
                    
                    source={{
                        uri: card1,
                    }}
                    width={250}
                />
            </View>
        </View>
        </View>

        <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.front}></View>
            <View style={styles.back}>
            <Image
                resizeMode="contain"
                
                source={{
                    uri: card2,
                }}
                width={250}
            />            
            </View>
        </View>
        </View>

        <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.front}></View>
            <View style={styles.back}>
                <Image
                    resizeMode="contain"
                    
                    source={{
                        uri: card3,
                    }}
                    width={250}
                />
            </View>
        </View>
        </View>

    </Modal>
  )
}

export default Loader;