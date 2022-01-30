import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import styles from '../styles/Card.style'
const card_teste__small = require('../assets/cards_exemplos/small/6983839.jpg');
const card_teste = require('../assets/cards_exemplos/6983839.jpg');

const Card = props => {
    const {
        card_url_small,
        ...attributes
    } = props;

    //time double click
    let backCount = 0;
    let backTimer = 0;

    return (
        <View
            >
            <TouchableWithoutFeedback
                style={{ position: 'absolute', left: 0, padding: 20, backgroundColor:'green' }}
                onPress={() => {
                        backCount++
                        if (backCount == 2) {
                            clearTimeout(backTimer)
                            console.warn("Clicked twice")
                        } else {
                            backTimer = setTimeout(() => {
                                backCount = 0
                            }, 3000)
                            console.warn("Clicked one")
                        }
                    }}
            >
                <Image
                    resizeMode="contain"
                    style={{
                        width:84,
                        height:123,
                        marginHorizontal: 3,
                        borderRadius: 150 / 2,
                        overflow: "hidden",
                        borderWidth: 3,
                        borderColor: "red"
                    }}
                    // source={{
                    //     uri: card_url_small,
                    // }}
                    source={card_teste__small}
                />

            </TouchableWithoutFeedback>

            
        </View>
    )
}

export default Card;