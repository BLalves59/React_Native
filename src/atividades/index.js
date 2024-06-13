import { View, Text, Pressable} from 'react-native';
import styles from './styles';

export default function Atividades({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Atividades</Text>
    
            <Pressable onPress={() => navigation.navigate('Ativ1')} style={styles.botao}>
                <Text style={styles.txtBotao}>Atividade 1</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ativ3')} style={styles.botao}>
                <Text style={styles.txtBotao}>Atividade 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ativ4')} style={styles.botao}>
                <Text style={styles.txtBotao}>Atividade 4</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ativ5')} style={styles.botao}>
                <Text style={styles.txtBotao}>Atividade 5</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ativ7')} style={styles.botao}>
                <Text style={styles.txtBotao}>Atividade 7</Text>
            </Pressable>
        </View>
    );
}
