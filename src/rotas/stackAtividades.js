import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Atividades from '../atividades';
import Ativ_1 from '../ativ1';
import Ativ_3 from '../ativ3';
import Atividade4 from '../ativ4';
import Atividade5 from '../ativ_5';
import Atividade7 from '../ativ_7';


const Stack = createNativeStackNavigator();

export default function NavegacaoAtividades() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Ativ" component={Atividades} options={{title: 'A T I V I D A D E'}}/>
            <Stack.Screen name="Ativ1" component={Ativ_1} options={{title: 'A T I V I D A D E 1'}}/>
            <Stack.Screen name="Ativ3" component={Ativ_3} options={{title: 'A T I V I D A D E 3'}}/>
            <Stack.Screen name="Ativ4" component={Atividade4} options={{title: 'A T I V I D A D E 4'}}/>
            <Stack.Screen name="Ativ5" component={Atividade5} options={{title: 'A T I V I D A D E 5'}}/>
            <Stack.Screen name="Ativ7" component={Atividade7} options={{title: 'A T I V I D A D E 7'}}/>
        </Stack.Navigator>
        
  );
}