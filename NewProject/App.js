import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    {name:"n1" , key:1},
    {name:"n2" , key:2},
    {name:"n3" , key:3},
    {name:"n4" , key:4},
    {name:"n5" , key:5},
    {name:"n6" , key:6},
    {name:"n6" , key:6},
    {name:"n6" , key:6},
    {name:"n6" , key:6},
    {name:"n6" , key:6},
    {name:"n6" , key:6},

  ])
  
  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map((item)=>(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:0,
    margin:10,
    width:300

   },
   item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:25
   }
});
