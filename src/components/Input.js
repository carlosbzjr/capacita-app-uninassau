import React from "react";
import { TextInput, StyleSheet } from 'react-native'

export default ({ placeholder, onChangeText }) => {

    const styles = StyleSheet.create({
        textInput: {
            backgroundColor: '#FFF',
            borderColor: '#CCC',
            borderWidth: 1,
            borderRadius: 3,
            width: '80%',
            padding: 10,
            color: '#333',
            fontSize: 20,
          }
    })

    return (
      <TextInput keyboardType='numeric'
        style={styles.textInput}
        width={styles.textInput.width}
        placeholder={placeholder}
        onChangeText={value => onChangeText(value)}
      />
    )
  }