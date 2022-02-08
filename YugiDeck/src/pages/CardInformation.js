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
import TypeDesc from '../components/card/TypeDesc';

import Orientation from 'react-native-orientation';



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
        static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
// console.log( this.props.navigation.state.params, 'navigation');
        this.state = {
            cardInfor: this.props.navigation.state.params
        }
    }

    loadAttribute = (attribute) =>  {

        console.log('loadAttribute', attributes);

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
                url_image = require("../assets/uteis/attribute/LIGHT.png"); 
                break;
        }

console.log('url_image', url_image);

        return url_image;
    }

    render() {

        let sourceImage = require("../assets/cards_exemplos/6983839.jpg");

        switch (this.state.cardInfor.Id) {
            case 94192409:
                sourceImage = require("../assets/cards_exemplos/94192409.jpg");
                break;
            case 23771716:
                sourceImage = require("../assets/cards_exemplos/23771716.jpg");
                break;
        
            default:
                break;
        }

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
                            <ScrollView
                                style={{transform: [{ rotate: '90deg' }],marginTop: 100, marginBottom: 90,   marginHorizontal: '-32%', }}
                            >
                                    <View
                                        style={{flex: 1, fontSize: 15, marginBottom: '25%', }}
                                    >
                                    <View
                                         style={{flex: 1, fontSize: 15, marginBottom: '25%', }}
                                    >
                                        <Text style={{fontSize: 15,}}>
                                            {this.state.cardInfor.desc}
                                        </Text>
                                    </View>
                                       
                                    </View>

                            </ScrollView>
                        
                        </View>
                    </View>
                
                </View>

                <View style={{ flex: 2, backgroundColor: "darkorange" }} >
                    <TypeDesc cardData={this.state.cardInfor} />
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
        
        </View>
        )
    }

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
        marginVertical: 110,
        transform: [{ scale: 2 }],        
    },
    box_desc_card: {
        flex: 3,
        backgroundColor: "red",
        flexDirection: "column",        
    },
    text_desc_card_atk: {
        fontSize: 20,
        transform: [{ rotate: '90deg' }],
        marginTop: '20%',
        fontWeight: "bold",
    },
    text_desc_card_def: {
        fontSize: 20,
        transform: [{ rotate: '90deg' }],
        marginTop: '20%',
    },
    text: {
        fontSize: 10,
        fontWeight: "bold",
        margin: '6%',
        color: "#000",
        textAlign: "center",
        transform: [{ rotate: '90deg' }],
        marginRight: '20%'
    },
    image_container_att:{
        flex: 1,
        borderRadius: 5,
        marginVertical: 40,
        alignItems: "center",
        justifyContent: "center",
        transform: [{ scale: 2 }]
    },
    image_container_dec_type_race:{
        fontWeight: "bold",
        marginTop: '70%',
        marginRight: '20%',
        fontSize: 8,
        transform: [{ rotate: '90deg' }],
    },
    cardAtkbute:{
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