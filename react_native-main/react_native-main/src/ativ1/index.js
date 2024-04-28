import { View, Text, Image } from 'react-native'; 

import logo from '../../assets/002-1-react-native.png';

import styles from './styles';

const Saudacoes = (props) => {
    return(
        <text style={{textAlign: 'center'}}>
            Bem vindo {props.name}!
        </text>
    );
}

export default function Ativ_1 () {
    return(
        <View style={styles.container}>
            {/* <Image source={logo} style={logo}/> */}
            <Image source={logo} style={{ width: '100%', height: '50%'}}/>
            <Text style={styles.paragraph}>
                Atividade 1
            </Text>


            <Saudacoes name='Bruno' />
            <Saudacoes name='Bruno' />
            <Saudacoes name='Bruno' />
            <Saudacoes name='Bruno' />


            {/* <text style={{textAling: 'center'}}>
            Olá Bruno!
            </text>
            <text style={{textAling: 'center'}}>
            Olá Bruno!
            </text>
            <text style={{textAling: 'center'}}>
            Olá Bruno!
            </text>
            <text style={{textAling: 'center'}}>
            Olá Bruno!
            </text> */}
        </View>
    );
}
