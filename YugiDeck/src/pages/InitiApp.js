import React, { Component } from "react";
import {
  View,
} from "react-native";

import styles from '../styles/Main.syle';
import ListCards from '../components/ListCards';
import ButtonFloating from '../components/ButtonFloating';


export default class InitiApp extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      visibleBtn: false,
      listaDeCartas: [
        // card XYZ Monster
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
        // card Normal Monster
        {
          "id":23771716,
          "name":"7 Colored Fish",
          "type":"Normal Monster",
          "desc":"A rare rainbow fish that has never been caught by mortal man.",
          "atk":1800,
          "def":800,
          "level":4,
          "race":"Fish",
          "attribute":"WATER",
          "card_sets":[
              {
                  "set_name":"Gold Series",
                  "set_code":"GLD1-EN001",
                  "set_rarity":"Common",
                  "set_rarity_code":"(C)",
                  "set_price":"1.62"
              },
              {
                  "set_name":"Metal Raiders",
                  "set_code":"MRD-098",
                  "set_rarity":"Common",
                  "set_rarity_code":"(C)",
                  "set_price":"2.62"
              },
              {
                  "set_name":"Metal Raiders",
                  "set_code":"MRD-E098",
                  "set_rarity":"Common",
                  "set_rarity_code":"(C)",
                  "set_price":"7.66"
              },
              {
                  "set_name":"Metal Raiders",
                  "set_code":"MRD-EN098",
                  "set_rarity":"Common",
                  "set_rarity_code":"(C)",
                  "set_price":"4.9"
              },
              {
                  "set_name":"Starter Deck: Joey",
                  "set_code":"SDJ-008",
                  "set_rarity":"Common",
                  "set_rarity_code":"(C)",
                  "set_price":"2.46"
              },
              {
                  "set_name":"Structure Deck: Fury from the Deep",
                  "set_code":"SD4-EN002",
                  "set_rarity":"Common",
                  "set_rarity_code":"(C)",
                  "set_price":"1.44"
              }
          ],
          "card_images":[
              {
                  "id":23771716,
                  "image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/23771716.jpg",
                  "image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/23771716.jpg"
              }
          ],
          "card_prices":[
              {
                  "cardmarket_price":"0.09",
                  "tcgplayer_price":"0.35",
                  "ebay_price":"2.99",
                  "amazon_price":"0.99",
                  "coolstuffinc_price":"0.49"
              }
          ]
        },
        // card armadilha 
        {
          "id":94192409,
            "name":"Compulsory Evacuation Device",
            "type":"Trap Card",
            "desc":"Target 1 monster on the field; return that target to the hand.",
            "race":"Normal",
            "card_sets":[{"set_name":"Battle Pack: Epic Dawn",
            "set_code":"BP01-EN099",
            "set_rarity":"Common",
            "set_rarity_code":"(C)",
            "set_price":"2.56"},
            {
              "set_name":"Battle Pack: Epic Dawn",
              "set_code":"BP01-EN099",
              "set_rarity":"Starfoil Rare",
              "set_rarity_code":"(SFR)",
              "set_price":"1.98"
            },
            {
              "set_name":"Dark Revelation Volume 2",
              "set_code":"DR2-EN104",
              "set_rarity":"Rare",
              "set_rarity_code":"(R)",
              "set_price":"3.48"
            },
            {
              "set_name":"Duel Overload",
              "set_code":"DUOV-EN097",
              "set_rarity":"Ultra Rare",
              "set_rarity_code":"(UR)",
              "set_price":"2.96"
            },
            {
              "set_name":"Duel Terminal 3",
              "set_code":"DT03-EN046",
              "set_rarity":"Duel Terminal Normal Parallel Rare",
              "set_rarity_code":"(DNPR)",
              "set_price":"9.19"
            },
            {
              "set_name":"Duelist League 2010 participation cards",
              "set_code":"DL09-EN019",
              "set_rarity":"Rare",
              "set_rarity_code":"(R)",
              "set_price":"10.53"
            },
            {
              "set_name":"Gold Series 2009",
              "set_code":"GLD2-EN046",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"2.8"
            },
            {
              "set_name":"HERO Strike Structure Deck",
              "set_code":"SDHS-EN039",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"1.54"
            },
            {
              "set_name":"High-Speed Riders",
              "set_code":"HSRD-EN058",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"1.3"
            },
            {
              "set_name":"Invasion of Chaos",
              "set_code":"IOC-103",
              "set_rarity":"Rare",
              "set_rarity_code":"(R)",
              "set_price":"1.99"
            },
            {
              "set_name":"Invasion of Chaos",
              "set_code":"IOC-EN103",
              "set_rarity":"Rare",
              "set_rarity_code":"(R)",
              "set_price":"0.00"
            },
            {
              "set_name":"Legendary Collection 3: Yugi's World Mega Pack",
              "set_code":"LCYW-EN291",
              "set_rarity":"Secret Rare",
              "set_rarity_code":"(ScR)",
              "set_price":"4.98"
            },
            {
              "set_name":"Legendary Collection 4: Joey's World Mega Pack",
              "set_code":"LCJW-EN295",
              "set_rarity":"Secret Rare",
              "set_rarity_code":"(ScR)",
              "set_price":"6.13"
            },
            {
              "set_name":"Machina Mayhem Structure Deck",
              "set_code":"SDMM-EN036",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"1.41"
            },
            {
              "set_name":"Noble Knights of the Round Table Power-Up Pack",
              "set_code":"NKRT-EN044",
              "set_rarity":"Platinum Rare",
              "set_rarity_code":"(PIR)",
              "set_price":"4.93"
            },
            {
              "set_name":"Premium Gold: Return of the Bling",
              "set_code":"PGL2-EN065",
              "set_rarity":"Gold Rare",
              "set_rarity_code":"(GUR)",
              "set_price":"3.48"
            },
            {
              "set_name":"Saga of Blue-Eyes White Dragon Structure Deck",
              "set_code":"SDBE-EN038",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"1.53"
            },
            {
              "set_name":"Starter Deck 2006",
              "set_code":"YSD-EN038",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"1.39"
            },
            {
              "set_name":"Starter Deck: Codebreaker",
              "set_code":"YS18-EN040",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"1.28"
            },
            {
              "set_name":"Starter Deck: Jaden Yuki",
              "set_code":"YSDJ-EN037",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"1.42"
            },
            {
              "set_name":"Starter Deck: Link Strike",
              "set_code":"YS17-EN038",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"1.48"
            },
            {
              "set_name":"Structure Deck: Invincible Fortress",
              "set_code":"SD7-EN032",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"1.66"
            },
            {
              "set_name":"Structure Deck: Zombie Madness",
              "set_code":"SD2-EN028",
              "set_rarity":"Common",
              "set_rarity_code":"(C)",
              "set_price":"1.65"
            },
            {
              "set_name":"Turbo Pack: Booster Four",
              "set_code":"TU04-EN005",
              "set_rarity":"Super Rare",
              "set_rarity_code":"(SR)",
              "set_price":"78.66"}],
              "card_images":[
                {
                  "id":94192409,
                  "image_url":"https://storage.googleapis.com/ygoprodeck.com/pics/94192409.jpg",
                  "image_url_small":"https://storage.googleapis.com/ygoprodeck.com/pics_small/94192409.jpg"
                }
              ],
              "card_prices":
              [
                {
                  "cardmarket_price":"0.09",
                  "tcgplayer_price":"0.30",
                  "ebay_price":"0.99",
                  "amazon_price":"1.48",
                  "coolstuffinc_price":"0.99"
                }
              ]
        }
      ],        
      listaDeCartasSelecionadas: [],
      listaDeCartasSelecionadasFavoritas: []
    };
  }

  selectCard = (e) => {
    // if(e != null){
    //   let id = e.id;
    //   // add to list
    //   const index = this.state.listaDeCartasSelecionadas.findIndex(x => x.id === id); 

    //   if (index > -1) {
    //     this.state.listaDeCartasSelecionadas.splice(index, 1); 
    //   }else{
    //     this.state.listaDeCartasSelecionadas.push(e);
    //     this.setState({visibleBtn: true});
    //   }

    //   if(this.state.listaDeCartasSelecionadas.length == 0){
    //     this.setState({visibleBtn: false});
    //   }
      
    //   this.setState({
    //     listaDeCartasSelecionadas: this.state.listaDeCartasSelecionadas
    //   })    
    // }


    // return this.state.listaDeCartasSelecionadas;

    this.props.navigation.navigate('CardInformation', e);
  }

  selectCardInformation = (e) => {
    console.warn('inits-selectCard',e);
  }

  favoriteCard = () => {
    if(this.state.listaDeCartasSelecionadas.length  > 0){
      console.log('inits-favoriteCard', this.state.listaDeCartasSelecionadas.length );

    //   if(e != null){
    //     let id = e.id;
    //     // add to list
    //     const index = this.state.listaDeCartasSelecionadas.findIndex(x => x.id === id); 

    //     if (index > -1) {
    //       this.state.listaDeCartasSelecionadas.splice(index, 1); 
    //     }else{
    //       this.state.listaDeCartasSelecionadas.push(e);
    //       this.setState({visibleBtn: true});
    //     }

    //     if(this.state.listaDeCartasSelecionadas.length == 0){
    //       this.setState({visibleBtn: false});
    //     }
        
    //     this.setState({
    //       listaDeCartasSelecionadas: this.state.listaDeCartasSelecionadas
    //     })    
    //   }
    }
  //  return this.state.listaDeCartasSelecionadas;
  }

  render() {
    return (

        <View style={styles.contentContainer}>
          {/* <Card loading={true} message="Carregando" /> */}
          <ListCards
            card_data={this.state.listaDeCartas}
            card_columns={3}
            selectCard={this.selectCard.bind(this)}
            selectCardInformation={this.selectCardInformation.bind(this)}
          />          
          {/* <ButtonFloating visibleBtn={this.state.visibleBtn} favoriteCard={this.favoriteCard.bind(this)} /> */}
        </View>

    );
  }
}