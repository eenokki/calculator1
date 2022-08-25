import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

export default function App() {
  
  const buttonAdd = () => {  
   setResult(parseInt(text1)+parseInt(text2));
  }

  const buttonSubstract = () => {  
    setResult(parseInt(text1)-parseInt(text2));
  }

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>

     
        <TextInput 
          style={styles.input}
          placeholder="first number"
          keyboardType="numeric"
          onChangeText={text1 => setText1(text1)}
          value={text1}
        />

        <TextInput
        style={styles.input}
        placeholder="second number"
        keyboardType="numeric"
        onChangeText={text2 => setText2(text2)}
        value={text2}
        />

      <View style={styles.button}>
        <Button onPress={buttonAdd} title="+" />
        <Button onPress={buttonSubstract} title="-" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   //display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:150, 
    borderColor: 'gray', 
    borderWidth: 1 ,  
    padding: 5
  },
  button: {
    flexDirection: 'row',
    marginTop: 10,
    width: 150,
    justifyContent:'space-evenly', 
  }
});