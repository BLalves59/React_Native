import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
// import styles from './styles';

export default props =>
<View style={styles.display}>
    <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
</View>

const styles = StyleSheet.create({
    display: {
        flex: 1,
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