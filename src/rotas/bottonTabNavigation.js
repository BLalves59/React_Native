import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavegacaoExemplos from './stackExemplos';
import NavegacaoAtividades from './stackAtividades';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Exemplos" component={NavegacaoExemplos} />
      <Tab.Screen name="Atividades" component={NavegacaoAtividades} />
    </Tab.Navigator>
  );
}