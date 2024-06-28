import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Heder from './component/heder';

export default function App() {
  const [todo,setTodo]= useState([
    {text:"text 1" , key: '1'},
    {text:"text 2" , key: '2'},
    {text:"text 3" , key: '3'},
    {text:"text 4" , key: '4'},
  ])

  return (
    <View style={styles.container}>
      {/* header */}
      <Heder/>

      <View style={styles.content}>
        {/* form */}
        <View style={styles.list}>
          <FlatList 
            data={todo}
            renderItem={({item})=>(
              <Text>{item.text}</Text>
            )}

          />
        
        </View>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content:{
    padding:40
  },
  list:{
    marginTop:20
  }
});
