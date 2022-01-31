import React, { Component } from "react";
import {
  View,
} from "react-native";

import styles from '../styles/Main.syle';
import ListCards from '../components/ListCards';
import ButtonFloating from '../components/ButtonFloating';
import InforCard from '../components/InforCard';


export default class InitiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleBtn: false,
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
        }
      ],
      listaDeCartasSelecionadas: [],
      listaDeCartasSelecionadasFavoritas: []
    };
  }

  selectCard = (e) => {
    if(e != null){
      let id = e.id;
      // add to list
      const index = this.state.listaDeCartasSelecionadas.findIndex(x => x.id === id); 

      if (index > -1) {
        this.state.listaDeCartasSelecionadas.splice(index, 1); 
      }else{
        this.state.listaDeCartasSelecionadas.push(e);
        this.setState({visibleBtn: true});
      }

      if(this.state.listaDeCartasSelecionadas.length == 0){
        this.setState({visibleBtn: false});
      }
      
      this.setState({
        listaDeCartasSelecionadas: this.state.listaDeCartasSelecionadas
      })    
    }
    return this.state.listaDeCartasSelecionadas;
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
          <InforCard />
        </View>

    );
  }
}