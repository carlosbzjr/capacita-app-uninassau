import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default ({ imc, bodyCondition, countCups }) => {

    const styles = StyleSheet.create({
        resultContainer: {
            padding: 30,
            borderRadius: 3,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            backgroundColor: '#83C5BE'
        },
        resultText: { fontSize: 14, color: '#333' }
    })

    return (
        <View width='80%' style={styles.resultContainer}>
            <Text style={styles.resultText}>
                Imc: {imc}
            </Text>
            <Text style={styles.resultText}>
                Condição corporal: {bodyCondition}
            </Text>
            <Text style={styles.resultText}>
                Copos de água/dia (300ml): {countCups}
            </Text>
        </View>
    )
}