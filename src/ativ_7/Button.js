import * as React from 'react';
import { Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
// import styles from './styles';


export default function Button(props) {
    const stylesbutton = [styles.button];
    if (props.double) stylesbutton.push(styles.buttonDouble);
    if (props.triple) stylesbutton.push(styles.buttonTriple);
    if (props.operation) stylesbutton.push(styles.operationButton);

    return (
        <TouchableHighlight
            onPress={() => props.onClick(props.label)}
            underlayColor="#CCCCCC"
        >
            <Text style={stylesbutton}>{props.label}</Text>
        </TouchableHighlight>
    );
}
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    button: {
        fontSize: RFPercentage(5),
        height: (Dimensions.get('window').width / 4) ,
        width: (Dimensions.get('window').width / 4) ,
        // width: Dimensions.get('window').width / 4,
        // height: Dimensions.get('window').width / 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    buttonDouble: {
        width: (windowWidth / 4) * 2,
    },
    buttonTriple: {
        width: (windowWidth / 4) * 3,
    },
    operationButton: {
        backgroundColor: '#FA8231',
        color: '#FFF',
    },


});
