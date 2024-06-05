import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Exemplos from '../exemplos';
import Exemplo2 from '../ex_2';
import Exemplo_3 from '../ex_3';
import Exemplo4 from '../ex_4';
import Exemplo5 from '../ativ5_Professor';
import Exemplo_6 from '../ex_6';
import Atividade_7 from '../ativ_7';
import Exemplo_8 from '../ex_8.2';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Ex0" component={Exemplos} options={{title: 'E X E M P L O S'}}/>
            <Stack.Screen name="Ex2" component={Exemplo2} options={{title: 'E X E M P L O  2'}}/>
            <Stack.Screen name="Ex3" component={Exemplo_3} options={{title: 'E X E M P L O 3'}}/>
            <Stack.Screen name="Ex4" component={Exemplo4} options={{title: 'E X E M P L O 4'}}/>
            <Stack.Screen name="Ex5" component={Exemplo5} options={{title: 'E X E M P L O 5'}}/>
            <Stack.Screen name="Ex6" component={Exemplo_6} options={{title: 'E X E M P L O 6'}}/>
            <Stack.Screen name="Ex7" component={Atividade_7} options={{title: 'E X E M P L O 7'}}/>
            <Stack.Screen name="Ex8" component={Exemplo_8} options={{title: 'E X E M P L O 8'}}/>
            
        </Stack.Navigator>
    </NavigationContainer>
  );
}