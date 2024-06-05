import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navegacao from './src/rotas/stackNavigation';

// import Props from './src/ex_2';
// import Ativ_1 from './src/ativ1';
// import Exemplo_3 from './src/ex_3';
// import Ativ_3 from './src/ativ3';
// import Exemplo4 from './src/ex_4';
// import Exemplo4 from './src/ex_4 Professor'; 
// import Atividade4 from './src/ativ4';
// import Exemplo5 from './src/ativ_5';
// import Exemplo5 from './src/ativ5_Professor';
// import Exemplo_6 from './src/ex_6';
// import Atividade_7 from './src/ativ_7';
// import Exemplo8 from './src/ex_8';
// import Exemplo_8 from './src/ex_8.2';

export default function App() {
  return (
    <View style={styles.container}>
      <Navegacao />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#03A9F4',
    padding: 8,
    // alignItems: 'center',
  },
});

