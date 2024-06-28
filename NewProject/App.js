import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name,setName] = useState('pasan')
  const [age,setage] = useState('20')

  const clickHandler = () =>{
    setName('Ranshika')
    setage('50')

  }

  const reFresh=()=>{
    setName('pasan')
    setage('20')
  }
  return (
    <View style={styles.container}>
      <TextInput multiline keyboardType='numeric' style={styles.input} placeholder='Enter name'  onChangeText={(val)=>setName(val)}/>
      <TextInput style={styles.input} placeholder='Enter age' onChangeText={(val)=>setage(val)}/>

      <Text>My name is {name}</Text>
      <Text>Age: {age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update Status' onPress={clickHandler}/>
        <Button title='Refresh' onPress={reFresh}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop:20
    
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:0,
    margin:10,
    width:300

   }
});
