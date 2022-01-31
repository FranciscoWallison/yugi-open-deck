import React from "react";
import {
  FlatList,
  SafeAreaView,
  View
} from "react-native";
import styles from '../styles/ListCards.style'
import GetCard from '../components/GetCard';

const createRows = (data, columns) => {
  const rows = Math.floor(data.length / columns);
  let lastRowElements = data.length - rows * columns;
  while (lastRowElements !== columns) {
    data.push({
      id: `empty-${lastRowElements}${Math.random()}`,
      name: `empty-${lastRowElements}`,
      empty: true
    });
    lastRowElements += 1;
  }
  return data;
}

const ListCards  = props => {
  const {
    card_data,
    card_columns,
    selectCard,
    selectCardInformation,
    ...attributes
  } = props;
  
  return (
    <SafeAreaView>
      <FlatList
        data={createRows(card_data, card_columns)}
        keyExtractor={item => item.id}
        numColumns={card_columns}
        renderItem={({ item }) => {
          if (typeof item.id != 'number') {
            return <View style={[styles.item, styles.itemEmpty]} />;
          }
          return (
            <View style={styles.item}>
              <GetCard
                selectCard={selectCard.bind(this)}
                selectCardInformation={selectCardInformation.bind(this)}                
                card_information={item}                
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}



export default ListCards;