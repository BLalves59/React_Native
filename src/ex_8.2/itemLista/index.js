import {Pressable, Text} from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

export default function ItemLista({dados, deleteItem}) {
    return(
        <Pressable 
            style={
                ({pressed}) => pressed ?
                    [styles.botao, styles.btnPress]
                :
                    styles.botao
            }
        >
            <Text style={styles.txtNome}>{`${dados.id} - ${dados.nome}`}</Text>
            <FontAwesome 
                name="remove" 
                size={20} 
                color="red"
                onPress={() => deleteItem(dados.id)}
            />
        </Pressable>
    )
}