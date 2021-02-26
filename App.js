import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Util from "./src/utils/functions";
import Input from "./src/components/Input";
import Result from "./src/components/Result";


export default function App() {

  /**
   *Data
   */
  const [imc, setImc] = useState(null);
  const [countCups, setCountCups] = useState(null);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bodyCondition, setBodyCondition] = useState('')

  /**
   * Actions 
   */
  const getStatusImc = () => Util.getStatusImc(imc)
  const getWaterConsumption = () => Util.getWaterConsumption(setCountCups)
  const getResult = () => Util.getResult(height, weight, setImc)

  useEffect(() => {
    getResult()
    setBodyCondition(getStatusImc(imc))
    getWaterConsumption()
  }, [height, weight])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <View width='100%' style={styles.titleContainer}>
            <Text style={styles.titleText}>Saúde +</Text>
          </View>

          <View width='100%' style={{ alignItems: 'center' }}>
            <View width='100%' style={styles.containerInput}>
              <Input onChangeText={setWeight} placeholder='Peso (ex: 60.00)' />
            </View>
            <View width='100%' style={styles.containerInput}>
              <Input onChangeText={setHeight} placeholder='Altura (ex: 1.75)' />
            </View>
          </View>

          <Result imc={imc} bodyCondition={bodyCondition} countCups={countCups} />

          <StatusBar hidden={true} />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006D77',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 15
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#EDF6F9',
    fontSize: 35,
    fontWeight: 'bold',
  }
  
});
