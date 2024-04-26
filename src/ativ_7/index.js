import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';


import Button from './Button';
import Display from './Display';

export default function Atividade_7() {
  
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);
  
  function addDigit(n) {

    const limpaTela = dis

    const currentValue = clearDisplay ? '' : displayValue;
    setDisplayValue(currentValue + n);
    setClearDisplay(false);
  }

  function clearMemory() {
    setDisplayValue('0');
  }

  function defineOperacao(operacao) {
    
  }
// pg 23
  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
      <Button label='AC' triple onClick={() => clearMemory()} />
      <Button label='/' operation onClick={defineOperacao} />
      <Button label='7' onclick={addDigit} />
      <Button label='8' onClick={addDigit} />
      <Button label='9' onClick={addDigit} />
      <Button label='*' operation onClick={defineOperacao} />
      <Button label='4' onClick={addDigit} />
      <Button label='5' onClick={addDigit} />
      <Button label='6' onClick={addDigit} />
      <Button label='-' operation onClick={defineOperacao} />
      <Button label='1' onclick={addDigit} />
      <Button label='2' onClick={addDigit} />
      <Button label='3' onclick={addDigit} />
      <Button label='+' operation onclick={defineOperacao} />
      <Button label='0' double onClick={addDigit} />
      <Button label='.' onClick={addDigit} />
      <Button label='=' operation onClick={defineOperacao} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    operationButton: {
      color: '#FFF',
      backgroundColor: '#FA8231',
    },
    buttonDouble: {
      width: ((Dimensions.get('window').width /4) -4) * 2,
    },
    buttonTriple: {
      width: ((Dimensions.get('window').width /4) -4) * 3,
    },
});
