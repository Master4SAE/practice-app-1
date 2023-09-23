import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';


const App = ()=> {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Carrots'},
  ]);

  return(
    <View style={styles.container}>
       <Header/>
       <FlatList 
       data={items} 
       renderItem={({item}) => 
       <ListItem item={item} />}
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




