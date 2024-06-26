
import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import Colors from '../constants/Colors';


export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.82);

const EventListCard= ({ item, index, onPress }) => {

  const { medium_image, event_title, venue, id, start_date, first_name,title,last_name } = item;

  return (
    <View>
      <View style={styles.card}>
        <Image source={{ uri: medium_image }}  style={styles.cardImage}/>
        <View style={styles.stack1}>
            <Text style={styles.cardTitle} allowFontScaling={false} numberOfLines={2} ellipsizeMode='tail'>{event_title}</Text>
            <Text style={styles.cardCreator} numberOfLines={1} ellipsizeMode="tail">Date: {`${start_date} | ${venue}`}</Text>
            <View style={{flexDirection: 'row', overflow: 'hidden'}}>
              <Text style={[ styles.cardCreator, {marginTop: 10, marginRight: 5, width: 180}]} allowFontScaling={false} numberOfLines={1} ellipsizeMode='tail'>By | { title + " " + first_name + " " +last_name} |
              </Text>
              <Text onPress={() => onPress(event_title, id)} style={styles.readMore} allowFontScaling={false}>See More...</Text>
            </View>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.defaultWhite,
    width: ITEM_WIDTH,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 0.4,
    marginVertical: 15,
    alignItems: 'flex-start',
    marginHorizontal: 10,
  },
  cardImage: {
    width: 100,
    height: 110,
    resizeMode: 'contain'
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    flexWrap: 'wrap',
  },
  cardCreator: {
    fontWeight: 'bold',
    color: 'grey',
  },

  stack1: {
    justifyContent: 'center',
    marginVertical:10,
    marginHorizontal: 10,
    flex: 1, 
  },

  readMore: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    color: 'blue'
    
  }

});

export default EventListCard