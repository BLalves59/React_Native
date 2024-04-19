import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo_6() {

  const [massa, setMassa] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [informacao, setInformacao] = useState('');

  function Calcular() {
    const valor = massa / (altura * altura);
    setResultado(valor);
  
    if (valor < 18.5) {
        setInformacao("Abaixo do Peso")
    }
    else if(valor >= 18.5 && valor < 24.9) {
        setInformacao("Peso normal")
    }
    else if(valor >= 25 && valor < 29.9) {
        setInformacao("Sobrepeso")
    }
    else if(valor >= 30 && valor < 34.9) {
        setInformacao("Obesidade Grau I")
    }
    else if(valor >= 35 && valor < 39.9) {
        setInformacao("Obesidade Grau II")
    }
    else if(valor > 40) {
        setInformacao("Obesidade Grau III")
    }
}
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> Exemplo 6 </Text>
      <View style={styles.entradaImc}>
        <TextInput 
          placeholder='Massa' 
          placeholderTextColor='lightgray' 
          keyboardType='numeric' 
          style={styles.input} 
          onChangeText={(entrada) => setMassa(entrada)}
        />
        <TextInput 
          placeholder='Altura' 
          placeholderTextColor='lightgray' 
          keyboardType='numeric' 
          style={styles.input} 
          onChangeText={(entrada) => setAltura(entrada)}
        />
      </View> 
      <Pressable style={styles.button} onPress={() => Calcular()} >
        <Text style={styles.buttonText}> Calcular </Text>
      </Pressable> 
      <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>

      <Text style={styles.informacaoText}>{informacao}</Text>
    </View> 
    
       
    

  );
}