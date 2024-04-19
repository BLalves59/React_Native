import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Ativ_3() {

    const [numero, setNumero] = useState(0);

    function incremento() {
        const inc = numero + 1;
        setNumero(inc);
    };

    function decremento() {
        const inc = numero - 1;
        setNumero(inc);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculadora</Text>

            <View style={styles.containerGeral}> {/* //Criando container para aumentar todos os botôes no 
                                                  limite do container, fzd uma margem e deixando eles do mesmo tamanho */}

            
                <View style={styles.botaoContainer}> {/* Criando um container para centralizar os botões + e - na mesma linha */}
                    <TouchableOpacity //botão +

                        style={styles.botao}
                        onPress={() => incremento()}>

                        <Text style={styles.txtBotao}> + 1 </Text>
                    </TouchableOpacity>

                    <text style={styles.titulo}> {numero}</text>

                    <TouchableOpacity //botão -
                        style={styles.botao}
                        onPress={() => decremento()}>

                        <Text style={styles.txtBotao}> - 1 </Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity //botão Zerar
                    style={styles.botao}
                    onPress={() => setNumero(0)}>

                    <Text style={styles.txtBotao}> Zerar </Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}