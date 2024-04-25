import * as React from 'react';
import { Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
// import styles from './styles';


export default function Button(props) {
    const stylesbutton = [styles.button];
    if (props.double) stylesbutton.push(styles.buttonDouble);
    if (props.triple) stylesbutton.push(styles.buttonTriple);
    if (props.operation) stylesbutton.push(styles.operationButton);
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.button}>{props.label1}</Text>
        </TouchableHighlight>
    );
}


const styles = StyleSheet.create({
    button: {
        fontSize: RFPercentage(5),
        height: (Dimensions.get('window').width / 4) - 4,
        width: (Dimensions.get('window').width / 4) - 4,
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
      },
      container: {
        flex: 1,
        backgroundColor: '#FFF',
      },
      buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      operationButton: {
        color: '#FFF',
        backgroundColor: '#FA8231',
      },
      buttonDouble: {
        width: ((Dimensions.get('window').width /4) -4) * 2,
      },
      buttonTriple: {
        width: ((Dimensions.get('window').width /4) -4) * 3,
      },
});
