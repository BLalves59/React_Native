import { View, Text, Pressable} from 'react-native';
import styles from './styles';

export default function Atividades({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Atividades</Text>

            <Pressable onPress={() => navigation.navigate('ativ1')} style={styles.botao}>
                <Text style={styles.txtBotao}>ativ1</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ativ3')}style={styles.botao}>
                <Text style={styles.txtBotao}>ativ3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ativ4')}style={styles.botao}>
                <Text style={styles.txtBotao}>ativ4</Text>
            </Pressable>
        </View>
    );
}