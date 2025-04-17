import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(()=>{
    const userState = auth().onAuthStateChanged(
      (user)=>{
        if(user){
          navigation.replace('Home')
        }
      }
    )
  },[]);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth(),email,password)
    .then((userCredentials)=>{
      const user = userCredentials.user
    })
    .catch((error)=>alert(error.message))
  }

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth(),email,password)
    .then((userCredentials)=>{
      const user = userCredentials.user
    })
    .catch((error)=>alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Login/Register</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(text) => {setEmail(text)}}
          value={email}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          onChangeText={(text) => {setPassword(text)}}
          value={password}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonregister]} onPress={handleRegister}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: 20,
  },

  textHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
  },

  inputContainer: {
    width: '80%'
  },

  input: {
    backgroundColor: 'orange',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 40,
    fontSize: 20,
    borderRadius: 10,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },

  button: {
    backgroundColor: '#6ABDB6FF',
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  buttonregister: {
    backgroundColor: 'purple',
    marginLeft: 10,
    borderColor: 'black',
    borderWidth: 2, 
  }
})