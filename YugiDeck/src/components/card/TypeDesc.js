
import React, { Component } from "react";
import { Platform, StyleSheet, View, Image, TouchableOpacity, Alert, Text } from "react-native";

const TypeDesc = props => {

    const {
        cardData,
        ...attributes
    } = props;

    let validarTypeCard = false;
   

    if(cardData.type.includes('Monster')){
        return (
            <View style={{flexDirection: "row",flex: 1, }}>
                <View style={styles.box_desc_card} >
                    <View>
                        <Image
                            style={styles.cardAtkbute}
                            source={require("../../assets/atk.png")}
                        />
                        <Text style={styles.text_desc_card_atk} >
                            {cardData.atk}
                        </Text>
                    </View>

                    <View >
                        <Image
                            style={styles.cardAtkbute}
                            source={require("../../assets/def.png")}
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
                            source={ cardData.type.includes('XYZ') ? require("../../assets/rank_star.png") : require("../../assets/star.png")}
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
    }else{
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
    }
    
}

export default TypeDesc;


const styles = StyleSheet.create({
    box_desc_card: {
        flex: 3,
        backgroundColor: "red",
        flexDirection: "column",
    },
    cardAtkbute:{
        width: 70,
        height: 70,
        transform: [{ rotate: '90deg' }],
    },
    text_desc_card_atk: {
        fontSize: 20,
        transform: [{ rotate: '90deg' }],
        marginTop: '20%',
        fontWeight: "bold",
    },
    cardAtkbute_star: {
        width: 40,
        height: 40,
        transform: [{ rotate: '90deg' }],
        margin: 10
    },
    box: {
        flex: 4,
        height: 100,
        width: 100,
        marginVertical: 110,
        transform: [{ scale: 2 }],        
    },
    image_container_dec_type_race:{
        fontWeight: "bold",
        marginTop: '70%',
        marginRight: '20%',
        fontSize: 8,
        transform: [{ rotate: '90deg' }],
    },
});
