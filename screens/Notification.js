

import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Notification({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Notification Page</Text>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});