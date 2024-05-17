import { useState } from 'react';
import { View, FlatList, } from 'react-native';

import Header from './header';
import ItemLista from './itemlista';

import styles from './styles';

export default function Exemplo8 () {
    const [itens, setItens] = useState([
        {id: 1, item: 'leite'},
        {id: 2, item: 'maça'},
        {id: 3, item: 'alfaçe'},
        {id: 4, item: 'mamão'},
        {id: 4, item: 'banana'}
    ]);
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={itens}
                renderItem={(objeto) => <ItemLista objeto={objeto.item}/> }
            />
        </View>
    );
}