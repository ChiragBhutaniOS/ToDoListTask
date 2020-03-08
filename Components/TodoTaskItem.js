import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoTaskItem = props => {

  return(
  <View style = {styles.taskItem}>
    <Text>{props.title}</Text>
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
  }});

export default TodoTaskItem;