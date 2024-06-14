import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import createBottomTabNavigator from '../rotas/bottonTabNavigation'
import Sobre from '../sobre';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={createBottomTabNavigator} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}