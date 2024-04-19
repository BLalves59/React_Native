import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo5() {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [total, setTotal] = useState('');

    function Soma() {
        setTotal(parseInt(n1) + parseInt(n2));
    }
    function Sub() {
        setTotal(parseInt(n1) - parseInt(n2));
    }
    function Div() {
        setTotal(parseInt(n1) / parseInt(n2));
    }
    function Mult() {
        setTotal(parseInt(n1) * parseInt(n2));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Exemplo 5
            </Text>

            <View style={styles.container}>
                <Text style={styles.txtSaida}>Calculadora básica</Text>

                <Text style={styles.textLabel1}>Primeiro número</Text>
                <TextInput
                    style={styles.txtEntrada}
                    onChangeText={(entrada) => setN1(entrada)}
                    value={n1}
                />

                {/* <Text style={styles.txtSaida}> + </Text> */}

                <Text style={styles.textLabel1}>Segundo número</Text>
                <TextInput
                    style={styles.txtEntrada}
                    onChangeText={(entrada) => setN2(entrada)}
                    value={n2}
                />

                <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

                <Text style={styles.textLabel1}>Total</Text>
                <TextInput
                    style={styles.txtEntrada}
                    editable={false}
                    value={total.toString()}
                />

                <View style={styles.botoes}>
                <Pressable style={styles.button} onPress={Soma}>
                    <Text style={styles.textButton}>+</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={Sub}>
                    <Text style={styles.textButton}>-</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={Mult}>
                    <Text style={styles.textButton}>x</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={Div}>
                    <Text style={styles.textButton}>/</Text>
                </Pressable>
                </View>

                <Pressable //terceiro botão
                    style={[styles.button, {width: '100%'}]} 
                    onPress={() => {
                    setTotal('');
                    setN1('');
                    setN2('');
                    }}
                    >
                
                <Text style={styles.textButton}> Zerar </Text>
                </Pressable>

            </View>
        </View>
    );
}
