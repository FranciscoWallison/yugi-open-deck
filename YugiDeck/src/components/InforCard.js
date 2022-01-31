import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Modal
} from "react-native";

const InforCard = () => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={true}>
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: "red" }} />
            <View style={{ flex: 2, backgroundColor: "darkorange" }} />
            <View style={{ flex: 3, backgroundColor: "green" }} />
        </View>
            
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between'
  }
});

export default InforCard;