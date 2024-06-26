import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#EEE',
      padding: 8,
    },
    paragraph: {
      margin: 6,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center', 
      color: '#AAA', 
    }, 
  

    entradaImc: {
      flex: 1, 
      flexDirection: 'row', 
    }, 
    input: {
      height: 80, 
      textAlign: 'center', 
      width: '50%', 
      fontSize: 50, 
      marginTop: 24, 
      color: 'lightgray',  
    }, 

    buttonText: {
      alignSelf: 'center', 
      padding: 30, 
      fontSize: 25, 
      color: '#6DC4A4',
      fontWeight: 'bold', 
    },
    resultados: {
      alignSelf: 'center', 
      color: 'lightgray', 
      fontSize: 65, 
      padding: 15, 
    }, 
    informacaoText: {
      alignSelf: 'center', 
      padding: 30, 
      fontSize: 25, 
      color: '#6DC4A4',
      fontWeight: 'bold', 
    },
  });

  export default styles;