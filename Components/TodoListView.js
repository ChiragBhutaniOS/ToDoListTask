import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Button, StyleSheet  } from 'react-native';

import TodoTaskItem from './TodoTaskItem';
import Constants from '../Constants/Constants';


export default class TodoListView extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true, isError: false, dataSource:[]}
  }

  
  componentDidMount(){
    return this.fetchData();
  }

  onReloadPressed = () =>{

    this.setState({
      isLoading: true,
      isError : false,
      dataSource: [],
    });

    this.fetchData();
  }

  //Fetch data from API
  fetchData = () => {

    url = Constants.hostname+Constants.endpoint;
    fetch(url, { timeout: 10000 })
      .then((response) => {
        
        if(response.status == 200){
          return response.json()
        }
        else{
          throw new Error('HTTP response status not code 200 as expected.');
        }
      })
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          isError : false,
          dataSource: responseJson,
        });

      })
      .catch((error) =>{
        this.setState({
          isLoading : false,
          isError : true,
          dataSource : [],
        })
      });

  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    if(this.state.isError){
      return(
        <View>
          <View style = {styles.errorView}>
            <Text style = {styles.errorTitleText}>Something went wrong</Text>
            <Text>Give it another try</Text>
            <View style = {styles.buttonReload}>
              <Button title = "RELOAD" onPress = {this.onReloadPressed}/>
            </View>
          </View>
        </View>
      )
    }

    return(
      <View>
        { <FlatList        
          keyExtractor={({id}, index) => id.toString()}
          data={this.state.dataSource}
          renderItem={({item}) =>
            <TodoTaskItem
              id = {item.id}
              title = {item.title}
              completed = {item.completed}
            />
          }
        /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorView: {
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    padding: 10,
    marginVertical: 200,
  },
  errorTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  errorTitleDesc: {
    fontSize: 14,
  },
  buttonReload : {
    fontSize: 22,
  }
});
