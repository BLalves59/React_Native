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

  // function addDigit(n) {

  //   const limpaTela = dis

  //   const currentValue = clearDisplay ? '' : displayValue;
  //   setDisplayValue(currentValue + n);
  //   setClearDisplay(false);
  // }
  function addDigit(n) {
    if (n === '.' && displayValue.includes('.')) {
      return;
    }

    let newValue;
    if (clearDisplay || displayValue === '0') {
      newValue = n;
    } else {
      newValue = displayValue + n;
    }

    setDisplayValue(newValue);
    setClearDisplay(false);

    if (n !== '.') {
      const newValueFloat = parseFloat(newValue);
      const newValues = [...values];
      newValues[current] = newValueFloat;
      setValues(newValues);
    }
  }

  // function clearMemory() {
  //   setDisplayValue('0');
  // }
  function clearMemory() {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  }

  // function defineOperacao(operacao) {
  //   if (current === 0) {
  //     setOperation(operacao);
  //     setCurrent(1);
  //     setClearDisplay(true);
  //   } else {
  //     const equals = operacao === '=';
  //     const valores = [...values];
  //     try {
  //       valores[0] = eval(`${valores[0]} ${operation} ${valores[1]}`);
  //     } catch (error) {
  //       valores[0] = values[0];
  //     }
  //     valores[1] = 0;
  //     setDisplayValue(`${valores[0]}`);
  //     setOperation(equals ? null : operacao);
  //     setCurrent(equals ? 0 : 1);
  //     setClearDisplay(!equals);
  //     setValues(valores);
  //   }
  // }
  function defineOperacao(op) {
    if (current === 0) {
      setOperation(op);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = op === '=';
      const result = calculate();
      setOperation(equals ? null : op);
      setCurrent(equals ? 0 : 1);
      setDisplayValue(`${result}`);
      setClearDisplay(true);
      setValues([result, 0]);
    }
  }
  function calculate() {
    const [value1, value2] = values;
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return value1;
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label='AC' triple onClick={() => clearMemory()} style={[styles.clearButton, styles.button]} />
        <Button label='/' operation onClick={() => defineOperacao('/')} style={styles.button} />
        <Button label='7' onClick={() => addDigit('7')} style={styles.button} />
        <Button label='8' onClick={() => addDigit('8')} style={styles.button} />
        <Button label='9' onClick={() => addDigit('9')} style={styles.button} />
        <Button label='*' operation onClick={() => defineOperacao('*')} style={styles.button} />
        <Button label='4' onClick={() => addDigit('4')} style={styles.button} />
        <Button label='5' onClick={() => addDigit('5')} style={styles.button} />
        <Button label='6' onClick={() => addDigit('6')} style={styles.button} />
        <Button label='-' operation onClick={() => defineOperacao('-')} style={styles.button} />
        <Button label='1' onClick={() => addDigit('1')} style={styles.button} />
        <Button label='2' onClick={() => addDigit('2')} style={styles.button} />
        <Button label='3' onClick={() => addDigit('3')} style={styles.button} />
        <Button label='+' operation onClick={() => defineOperacao('+')} style={styles.button} />
        <Button label='0' double onClick={() => addDigit('0')} style={[styles.zeroButton, styles.button]} />
        <Button label='.' onClick={() => addDigit('.')} style={styles.button} />
        <Button label='=' operation onClick={() => defineOperacao('=')} style={[styles.equalButton, styles.button]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Alinha os botões à direita
    width: Dimensions.get('window').width,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  // operationButton: {
  //   color: '#FFF',
  //   backgroundColor: '#FA8231',
  // },
  // buttonDouble: {
  //   width: ((Dimensions.get('window').width / 4) - 4) * 2,
  // },
  // buttonTriple: {
  //   width: ((Dimensions.get('window').width / 4) - 4) * 3,
  // },
  clearButton: {
    backgroundColor: '#ACACAC',
    width: Dimensions.get('window').width / 4 * 3, // largura de três quartos da tela
  },
  zeroButton: {
    width: '100%',
    width: Dimensions.get('window').width / 4 * 2, // largura de metade da tela
  },
  equalButton: {
    backgroundColor: '#FF9800',
  },
  // equalsButton: {
  //   marginRight: ((Dimensions.get('window').width / 4) - 4) * 3,
  // },
  button: {
    flex: 1, // Alterado para flexível
  },
});
