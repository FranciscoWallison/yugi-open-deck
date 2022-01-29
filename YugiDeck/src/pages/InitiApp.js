import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Alert,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import styles from '../styles/Main.syle';
import Card from '../components/Card';

export default class InitiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: false
    };    
  }

  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View style={styles.container}>
        <Card loading={true} message="Carregando" />
        <Text style={styles.currentStepText}> Texto </Text>
      </View>
    );
  }
}