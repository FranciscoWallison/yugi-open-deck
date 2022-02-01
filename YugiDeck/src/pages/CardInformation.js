import React, {PureComponent} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    ScrollView,
    StatusBar 
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

        switch (this.state.cardInfor.type) {
            case "Normal Monster":
                return (
                        <View style={[, {
                                flexDirection: "row",
                                flex: 1,
                            }]}>
                                <View style={styles.box_desc_card} >
                                    <View style={styles.image_container_atk_def} >
                                        <Image
                                            style={styles.cardAtkbute}
                                            source={require("../assets/atk.png")}
                                        />
                                        <Text style={styles.text_desc_card_atk} >
                                            {this.state.cardInfor.atk}
                                        </Text>
                                    </View>

                                    <View style={styles.image_container_atk_def} >
                                        <Image
                                            style={styles.cardAtkbute}
                                            source={require("../assets/def.png")}
                                        />
                                        <Text style={styles.text_desc_card_atk} >
                                            {this.state.cardInfor.def}
                                        </Text>
                                    </View>                                        
                                </View>
                                <View style={{ flex: 3, backgroundColor: "blu",flexDirection: "column" }} >
                                    <View style={styles.image_container_atk_def} >
                                        <Image
                                            style={styles.cardAtkbute_star}
                                            source={require("../assets/star.png")}
                                        />
                                        <Text style={styles.text_desc_card_atk} >
                                            {this.state.cardInfor.level}
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
                <View style={{ flex: 3, backgroundColor: "green", flexDirection: 'column',  marginRight:'1%', marginLeft: '-1%' }} >
                    <View style={{ backgroundColor: "orange",   flex: 1 }} >


                <View style={{ flexDirection: 'column',   }}  > 
                  
                       <View style={{  }}  /> 
                   <ScrollView
  
                     style={{transform: [{ rotate: '90deg' }],  marginHorizontal: '-50%', }}
                   
                     >
                    
                        
                        <Text style={{flex: 1, fontSize: 15, marginTop: '30%', marginBottom: '60%', }}>
                            {this.state.cardInfor.desc}
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan

                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan

                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            asdasdasdasdasdadn abskdj anskljdn ajksnd jkasnd kjan
                            111111111111111111
                        </Text>

              
                </ScrollView>
                
                </View>
            </View>
                
                </View>

                <View style={{ flex: 2, backgroundColor: "darkorange" }} >
                    {this.typeCardLoad()}
                </View>
                <View style={{ flex: 1, backgroundColor: "red", flexDirection: 'column',  }} >
   
                    <View style={styles.box} >
                        <Text style={styles.text} >
                            {this.state.cardInfor.name}
                        </Text>
                    </View>

                    <View style={styles.image_container_att} >
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
        Orientation.lockToPortrait();
        Orientation.addOrientationListener(this._orientationDidChange);
    }

    _orientationDidChange = (orientation) => {
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
        // transform: [{ rotate: '90deg' }]
    },
    container_information:{
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: "#343461",
    },
    card: {
        width:430,
        height: 300,
        // margin: '5%'
        transform: [{ rotate: '90deg' }]
    },
    cardAttribute:{
        width:20,
        height: 20,
        transform: [{ rotate: '90deg' }],
    },
    box: {
        flex: 4,
        height: 100,
        width: 100,
        // borderRadius: 5,
        marginVertical: 100,
        // alignItems: "center",
        // justifyContent: "center",
        transform: [{ scale: 2 }],
        
    },
    box_desc_card: {
        // marginVertical: 2,
        // // flex: 4,
        // alignItems: "stretch",
        // transform: [{ scale: 2 }],
        // flexDirection: 'column',
        //   backgroundColor: 'black'

        flex: 3, backgroundColor: "red", flexDirection: "column", 
    },
    text_desc_card_atk: {
        fontSize: 20,
        transform: [{ rotate: '90deg' }],
        marginTop: '20%',
        // flex: 3,
        // backgroundColor: 'black'
        // marginTop: '20%'
    },
    text_desc_card_def: {
        fontSize: 20,
        transform: [{ rotate: '90deg' }],
        marginTop: '20%',
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
    },
    image_container_att:{
        flex: 1,
        // height: 70,
        // width: 70,
        borderRadius: 5,
        marginVertical: 40,
        alignItems: "center",
        justifyContent: "center",
        transform: [{ scale: 2 }]
    },
    image_container_atk_def:{
        // flex: 1,
        // height: 30,
        // width: 30,
        // borderRadius: 5,
        // marginVertical: 40,
        // alignItems: "center",
        // justifyContent: "center",
        // transform: [{ scale: 2 }]
        //  flex: 1,
    },
    cardAtkbute:{
        // flex: 3,
        width: 70,
        height: 70,
        transform: [{ rotate: '90deg' }],
    },
    cardAtkbute_star: {
        width: 40,
        height: 40,
        transform: [{ rotate: '90deg' }],
        margin: 10
    }
});