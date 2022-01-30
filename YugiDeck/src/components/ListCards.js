import React from "react";
import {
  FlatList,
  SafeAreaView,
  View
} from "react-native";
import styles from '../styles/ListCards.style'
import Card from '../components/Card';

 const createRows = (data, columns) => {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;

    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
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
    ...attributes
  } = props;
  return (
    <SafeAreaView>
      <FlatList
        data={createRows(card_data, card_columns)}
        keyExtractor={item => item.id}
        numColumns={card_columns}
        renderItem={({ item }) => {
          if (item.empty) {
            return <View style={[styles.item, styles.itemEmpty]} />;
          }
          return (
            <View style={styles.item}>
              <Card  card_url_small={item.card_images[0].image_url_small} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}



export default ListCards;