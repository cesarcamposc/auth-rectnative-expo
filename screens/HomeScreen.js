import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { auth } from '../firebase'

const HomeScreen = () => {

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth()
    .signOut()
    .then(()=>{
      navigation.replace('Login')
    })
    .catch((e)=>alert(e.message));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textEmail}>Your Email is: {auth().currentUser?.email} </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F492FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textEmail: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: 'red',
    width: '60%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }

})