import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade4() {



    const [mensagem] = useState('Nome');
    const [mensagem2] = useState('Sobrenome');
    const [mens, setMens] = useState('Nome');
    const [mens2, setMens2] = useState('Sobrenome');
    const [mensTela, setMensTela] = useState('');
    const [mensTela2, setMensTela2] = useState('');

    function atualizaMensagemHandler() {
        setMensTela(mens2);
        setMensTela2(mens);
        setMens2('');
        setMens('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.txtSaida}>{mensTela2} {mensTela}</Text>

            <View style={styles.container2}>
            <Text style={styles.txtSaida}>{mensagem} </Text> 
            </View>

            <TextInput
                style={styles.txtEntrada}
                // placeholder='Outro texto' 
                onChangeText={(entrada) => setMens(entrada)}
                value={mens}
            />

            <View style={styles.container2}>
            <Text style={styles.txtSaida}>{mensagem2}</Text>
            </View>
            
            <TextInput
                style={styles.txtEntrada}
                // placeholder='Outro texto' 
                onChangeText={(entrada) => setMens2(entrada)}
                value={mens2}
            />
            <Pressable
                onPress={() => atualizaMensagemHandler()}
                style={styles.botao}
            >
                <Text style={styles.txtBotao}>Exibir mensagem</Text>
            </Pressable>
        </View>
      
    );
}