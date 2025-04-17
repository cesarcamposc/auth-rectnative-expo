import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Login/Register</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={() => {}}
          value=""
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          onChangeText={() => {}}
          value=""
          secureTextEntry={true}
        />
      </View>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({})