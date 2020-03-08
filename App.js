import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import Header from './Components/Header';
import TodoListView from './Components/TodoListView';

function App() {

  return (
    <SafeAreaView style = {styles.screen}>
      <Header title = "Todo List" />
      <View style = {styles.listView}>
        <TodoListView />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen:
  {
    flex: 1
  },
  TodoListViewStyle:
  {
    flex: 1,
    color : 'red',
  }
});

export default App;
