import { useState } from 'react';
import { View, FlatList, } from 'react-native';

import Header from './header';
import ItemLista from './itemLista/index';

import styles from './styles';

export default function Exemplo8 () {
    const [itens, setItens] = useState([
        {id: 1, nome: 'leite'},
        {id: 2, nome: 'maça'},
        {id: 3, nome: 'alfaçe'},
        {id: 4, nome: 'mamão'},
        {id: 5, nome: 'banana'}
    ]);

    function deleteItem (id){
        setItens(
            prevItens => {
            return prevItens.filter(
                (item) => item.id != id
                );
            }
        );
    }

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={itens}
                renderItem={(objeto) => 
                <ItemLista
                    dados={objeto.item}
                    deleteItem={deleteItem}    
                /> }
                keyExtractor={item => item.id}
            />
        </View>
    );
}