import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoTaskItem = props => {

  return(
  <View style = {styles.taskItem}>
    <View style = {StyleSheet.create({marginBottom:5})}>
      <Text style = {styles.titleText}>{props.title}</Text>
    </View>
    <Text>Completed : { props.completed.toString()}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    marginVertical: 0,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderBottomWidth: 1
  },
  titleText:{
    fontSize: 20,
  },

});

export default TodoTaskItem;