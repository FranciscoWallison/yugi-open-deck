
import React, { Component } from "react";
import { Platform, StyleSheet, View, Image, TouchableOpacity, Alert, Text } from "react-native";


const ButtonFloating = props => {

    const {
        cardData,
        ...attributes
    } = props;

    let validarTypeCard = false;


    switch (cardData.type) {
        case "Normal Monster":
            return (
                <View style={{flexDirection: "row",flex: 1, }}>
                    <View style={styles.box_desc_card} >
                        <View>
                            <Image
                                style={styles.cardAtkbute}
                                source={require("../assets/atk.png")}
                            />
                            <Text style={styles.text_desc_card_atk} >
                                {cardData.atk}
                            </Text>
                        </View>

                        <View >
                            <Image
                                style={styles.cardAtkbute}
                                source={require("../assets/def.png")}
                            />
                            <Text style={styles.text_desc_card_atk} >
                                {cardData.def}
                            </Text>
                        </View>

                    </View>
                    <View style={{ flex: 3, backgroundColor: "blu",flexDirection: "column" }} >
                        <View  >
                            <Image
                                style={styles.cardAtkbute_star}
                                source={require("../assets/star.png")}
                            />
                            <Text style={styles.text_desc_card_atk} >
                                {cardData.level}
                            </Text>
                        </View>

                        <View style={styles.box} >
                            <Text style={styles.image_container_dec_type_race} >
                                {console.log('type / race',cardData.type,  cardData.race)}
                                {cardData.type} / {cardData.race}
                            </Text>
                        </View>
                    </View>
                </View>
                )
        break;
        case "XYZ Monster":
            return (
                <View style={{flexDirection: "row",flex: 1, }}>
                    <View style={styles.box_desc_card} >
                        <View>
                            <Image
                                style={styles.cardAtkbute}
                                source={require("../assets/atk.png")}
                            />
                            <Text style={styles.text_desc_card_atk} >
                                {cardData.atk}
                            </Text>
                        </View>

                        <View >
                            <Image
                                style={styles.cardAtkbute}
                                source={require("../assets/def.png")}
                            />
                            <Text style={styles.text_desc_card_atk} >
                                {cardData.def}
                            </Text>
                        </View>

                    </View>
                    <View style={{ flex: 3, backgroundColor: "blu",flexDirection: "column" }} >
                        <View  >
                            <Image
                                style={styles.cardAtkbute_star}
                                source={require("../assets/star.png")}
                            />
                            <Text style={styles.text_desc_card_atk} >
                                {cardData.level}
                            </Text>
                        </View>

                        <View style={styles.box} >
                            <Text style={styles.image_container_dec_type_race} >
                                {console.log('type / race',cardData.type,  cardData.race)}
                                {cardData.type} / {cardData.race}
                            </Text>
                        </View>
                    </View>
                </View>
                )
        break;
        default:
                return (
                        <View style={[, {
                        // Try setting `flexDirection` to `"row"`.
                            flexDirection: "row",
                            flex: 1,
                            // padding: 20,
                        }]}>
                            <View style={{ flex: 3, backgroundColor: "red" }} />
                            <View style={{ flex: 3, backgroundColor: "green" }} />
                        </View>
                )
            break;
    }
}

export default ButtonFloating;


 const styles = StyleSheet.create({
  
});
