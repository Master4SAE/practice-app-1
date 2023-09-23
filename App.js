import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style="">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <ScrollView>
        <Text> Some text </Text>
        <View>
          <Text>some more text</Text>

          
        </View>

        <TextInput defaultValue='Type here'/>

    </ScrollView>
    </View>
  );
}


