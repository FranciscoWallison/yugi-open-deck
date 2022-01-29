import React, { Component } from 'react';
import {
  View,
  Modal,
  Text,
  ActivityIndicator
} from 'react-native';

import styles from '../styles/Loader.style'

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
      visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading}
            color='pink' />
          <View style={{ marginVertical: 5}}>
            <Text style={{ textAlign: 'center', color:'#2980b6' }}>{message}</Text>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default Loader;