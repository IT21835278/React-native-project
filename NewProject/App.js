import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name,setName] = useState('pasan')
  const [person,setPerson] = useState({
    pname:'Jhone',
    age:20
  })

  const clickHandler = () =>{
    setName('Ranshika')
    setPerson({
      pname:'whick',
      age:30
    })
  }

  const reFresh=()=>{
    setName('Pasan')
    setPerson({
      pname:'Jhone',
    age:20
    })
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>2nd state {person.pname} and age {person.age}</Text>
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
    
  }
});
