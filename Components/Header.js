import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {

  return(
  <View style = {styles.header}>
    <Text style = {styles.headerTitle}>{props.title}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '90%',
    height: 60,
    paddingTop: 0,
    backgroundColor: 'white',
    alignSelf : 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth : 1,
    borderBottomColor : 'lightgray'
  },
  headerTitle:{
    color: 'black',
    fontSize: 22
  }
});

export default Header;