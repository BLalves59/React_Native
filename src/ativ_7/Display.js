import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
// import styles from './styles';

// export default function props(props){
// <View style={styles.display}>
//     <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
// </View>
// }
export default function Display(props) {
    return (
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    // display: {
    //     flex: 1,
    //     padding: '20%',
    //     justifyContent: 'center',
    //     backgroundColor: 'rgba(0, 0, 0, 0.6)',
    //     alignItems: 'flex-end',
    // },
    display: {
        width: Dimensions.get('window').width, // Define a largura igual à largura da tela
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: RFPercentage(8),
        color: '#FFF',
    },
});