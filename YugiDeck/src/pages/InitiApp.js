import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import styles from '../styles/Main.syle';
import ListCards from '../components/ListCards';

export default class InitiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: false,
      listaDeCartas: [
        // card 1
        {
          "id": 6983839,
          "name": "Tornado Dragon",
          "type": "XYZ Monster",
          "desc": "2 Level 4 monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card, then target 1 Spell/Trap on the field; destroy it.",
          "atk": 2100,
          "def": 2000,
          "level": 4,
          "race": "Wyrm",
          "attribute": "WIND",
          "card_sets": [
            {
              "set_name": "Battles of Legend: Relentless Revenge",
              "set_code": "BLRR-EN084",
              "set_rarity": "Secret Rare",
              "set_rarity_code": "(ScR)",
              "set_price": "4.08"
            },
            {
              "set_name": "Duel Devastator",
              "set_code": "DUDE-EN019",
              "set_rarity": "Ultra Rare",
              "set_rarity_code": "(UR)",
              "set_price": "1.4"
            },
            {
              "set_name": "Maximum Crisis",
              "set_code": "MACR-EN081",
              "set_rarity": "Secret Rare",
              "set_rarity_code": "(ScR)",
              "set_price": "4.32"
            }
          ],
          "card_images": [
            {
              "id": 6983839,
              "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg",
              "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"
            }
          ],
          "card_prices": [
            {
              "cardmarket_price": "0.42",
              "tcgplayer_price": "0.48",
              "ebay_price": "2.99",
              "amazon_price": "0.77",
              "coolstuffinc_price": "0.99"
            }
          ]
        },
        // segundo exemplo
        {
          "id": 6983839,
          "name": "Tornado Dragon",
          "type": "XYZ Monster",
          "desc": "2 Level 4 monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card, then target 1 Spell/Trap on the field; destroy it.",
          "atk": 2100,
          "def": 2000,
          "level": 4,
          "race": "Wyrm",
          "attribute": "WIND",
          "card_sets": [
            {
              "set_name": "Battles of Legend: Relentless Revenge",
              "set_code": "BLRR-EN084",
              "set_rarity": "Secret Rare",
              "set_rarity_code": "(ScR)",
              "set_price": "4.08"
            },
            {
              "set_name": "Duel Devastator",
              "set_code": "DUDE-EN019",
              "set_rarity": "Ultra Rare",
              "set_rarity_code": "(UR)",
              "set_price": "1.4"
            },
            {
              "set_name": "Maximum Crisis",
              "set_code": "MACR-EN081",
              "set_rarity": "Secret Rare",
              "set_rarity_code": "(ScR)",
              "set_price": "4.32"
            }
          ],
          "card_images": [
            {
              "id": 6983839,
              "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg",
              "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"
            }
          ],
          "card_prices": [
            {
              "cardmarket_price": "0.42",
              "tcgplayer_price": "0.48",
              "ebay_price": "2.99",
              "amazon_price": "0.77",
              "coolstuffinc_price": "0.99"
            }
          ]
        }
      ]
    };    
  }

  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View style={styles.container}>
        {/* <Card loading={true} message="Carregando" /> */}
        <ListCards card_data={this.state.listaDeCartas} card_columns={3} />

        
        {/* <Text style={styles.currentStepText}> Texto </Text> */}
      </View>
    );
  }
}