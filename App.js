import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import ListItem from './components/ListItem';
import Header from './components/Header';
import {uuid} from 'uuidv4';

const App = ()=> {
  const [items, setItem] = useState([
    {id:uuid(), text: 'Milk'},
    {id:uuid(), text: 'Potatos'},
    {id:uuid(), text: 'Carrots'},
    {id:uuid(), text: 'Breads'}
  
  ]);

  return(

    <View style={styles.container}>
       <Header/>

       <FlatList data ={items} renderItem={({item}) => <ListItem item={item}/>}
       />
    </View>

  );
};

const styles = StyleSheet.create({
  container : {
    flex:1,
    paddingTop: 60,
  },

});

export default App;




