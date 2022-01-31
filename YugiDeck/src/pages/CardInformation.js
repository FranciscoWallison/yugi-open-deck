import React, {PureComponent} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native';
import { SvgUri } from 'react-native-svg';

import Orientation from 'react-native-orientation';
const sourceImage =  require("../assets/cards_exemplos/23771716.jpg") 


// https://yugioh.fandom.com/pt-br/wiki/Rise_to_Full_Height
//  
const {
    width: deviceScreenWidth,
    height: deviceScreenHeight
} = Dimensions.get('window');

let aspectRatio = deviceScreenWidth / deviceScreenHeight;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screen = Dimensions.get("screen");
export default class CardInformation extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            cardInfor: {
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
        }
    }

    typeCardLoad = () => {
        this.state.cardInfor;

        switch (key) {
            case value:
                
                break;
        
            default:
                break;
        }
        return (
            <View>

            </View>
        )
    }

    loadAttribute = (attribute) =>  {
        // https://ms.yugipedia.com//f/f0/WATER.png
        let url_image =  'https://ms.yugipedia.com/';
        switch (attribute) {
            case 'LIGHT':
                url_image = require("../assets/uteis/attribute/LIGHT.png"); 
                break;
            case 'DARK':
                url_image = require("../assets/uteis/attribute/DARK.png"); 
                break;
            case 'EARTH':
                url_image = require("../assets/uteis/attribute/EARTH.png"); 
                break;
            case 'FIRE':
                url_image = require("../assets/uteis/attribute/FIRE.png"); 
                break;
            case 'WATER':
                url_image = require("../assets/uteis/attribute/WATER.png"); 
                break;
            case 'WIND':
                url_image = require("../assets/uteis/attribute/WIND.png"); 
                break;
            case 'DIVINE':
                url_image = require("../assets/uteis/attribute/DIVINE.png"); 
                break;;
            case 'SPELL':
                url_image = require("../assets/uteis/attribute/SPELL.png"); 
                break;;
            case 'TRAP':
                url_image = require("../assets/uteis/attribute/TRAP.png"); 
                break;
        
            default:
                url_image = ''
                break;
        }

        return url_image;
    }

    render() {
        return (
        <View style={styles.container}>      
          <View style={{ flex: 3 }} >
                <Image
                    resizeMode="contain"
                    style={styles.card}
                    // source={{
                    //     uri: card_information.card_images[0].image_url_small ,
                    // }}
                    source={sourceImage}
                />
          </View>
          <View style={{ flex: 4 }} >
            <View style={styles.container_information}>
             <View style={{ flex: 3, backgroundColor: "green" }} />
                <View style={{ flex: 2, backgroundColor: "darkorange" }} >
                    {this.typeCardLoad()}
                </View>
                <View style={{ flex: 1, backgroundColor: "red", flexDirection: 'column',  }} >
   
                    <View style={styles.box} >
                        <Text style={styles.text} >
                            {this.state.cardInfor.name}
                        </Text>
                    </View>


                    <View style={
                        {
                            flex: 1,
                            height: 70,
                            width: 70,
                            borderRadius: 5,
                            marginVertical: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            transform: [{ scale: 2 }]
                        }
                    } >
                          <Image
                                resizeMode="contain"
                                style={styles.cardAttribute}
                                source={this.loadAttribute(this.state.cardInfor.attribute)}
                            />
                    </View>
                </View>

               
                
            </View>
          </View>
          {/* <View style={{ flex: 1 }} /> */}
        </View>
        )
    }// end of render

    componentDidMount() {

        console.log(deviceScreenWidth,deviceScreenHeight, screen)

        if ((deviceScreenWidth < deviceScreenHeight || screen.width < screen.height)) {
            Orientation.lockToPortrait();
        } else {
            
            Orientation.lockToLandscape();
        }

        // this unlocks any previous locks to all Orientations
        // Orientation.unlockAllOrientations();

        Orientation.addOrientationListener(this._orientationDidChange);
    }

    _orientationDidChange = (orientation) => {
        console.log('_orientationDidChange')
        if (orientation === 'LANDSCAPE') {
            // do something with landscape layout
        } else {
            // do something with portrait layout
        }
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#343461",
        // position: 'absolute',
        // bottom: 0,
        // width: screenWidth,
        // height: 60

        // alignItems: "center", // ignore this - we'll come back to it
        // justifyContent: "center", // ignore this - we'll come back to it
        // flexDirection: "column"
        // justifyContent: 'space-between'
    },
    container_information:{
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: "#343461",
    },
    card: {
        width:430,
        height: 300,
        transform: [{ rotate: '90deg' }],
        // margin: '5%'
    },
    cardAttribute:{
        width:25,
        height: 25,
        transform: [{ rotate: '90deg' }],
        

    },
    box: {
        flex: 4,
        height: 100,
        width: 100,
        borderRadius: 5,
        marginVertical: 40,
        alignItems: "center",
        justifyContent: "center",
        transform: [{ scale: 2 }]
  },
  text: {
    fontSize: 10,
    // flex: 1,
    fontWeight: "bold",
    margin: '5%',
    color: "#000",
    textAlign: "center",
    transform: [{ rotate: '90deg' }],
    marginRight: '20%'
  }
});