import { View, Text, Pressable} from 'react-native';
import styles from './styles';

export default function Exemplos({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Exemplos</Text>

            <Pressable onPress={() => navigation.navigate('Ex8')} style={styles.botao}>
                <Text style={styles.txtBotao}>Exemplo 2</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ex3')}style={styles.botao}>
                <Text style={styles.txtBotao}>Exemplo 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ex4')}style={styles.botao}>
                <Text style={styles.txtBotao}>Exemplo 4</Text>
            </Pressable>
        </View>
    );
}