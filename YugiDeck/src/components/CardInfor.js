import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import styles from '../styles/Card.style'

const CardInfor = props => {
    const {
        card_information,
        selectCard,
        selectCardInformation,
        ...attributes
    } = props;

    //time double click
    let backCount = 0;
    let backTimer = 0;
    let validIsSelect = selectCard(null).indexOf(card_information.id);
    let sourceImage =  card_information.id == 23771716
        ? require("../assets/cards_exemplos/small/23771716.jpg") 
        : require("../assets/cards_exemplos/small/6983839.jpg") 

    return (
        <View
            >
            <TouchableWithoutFeedback
                style={styles.eventClick}
                onPress={() => {
                        backCount++
                        if (backCount == 2) {
                            clearTimeout(backTimer)
                            console.log("Clicked twice")
                            selectCardInformation(card_information);
                            
                        } else {
                            backTimer = setTimeout(() => {
                                backCount = 0
                            }, 3000)
                            selectCard(card_information)
                        }
                    }}
            >
                <Image
                    resizeMode="contain"
                    style={ validIsSelect === -1 ? styles.cardOffSelect : styles.cardOnSelect }
                    // source={{
                    //     uri: card_information.card_images[0].image_url_small ,
                    // }}
                    source={sourceImage}
                />

            </TouchableWithoutFeedback>

            
        </View>
    )
}

export default CardInfor;