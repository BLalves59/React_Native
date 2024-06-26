import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcdd2',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#b71c1c',
    },
    txtSaida: {
        margin: 20,
        fontSize: 25,
        color: '#e53935',
    },
    txtEntrada: {
        borderWidth: 3,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#b71c1c',
        height: 40,
        width: '70%',
        color: '#53935',
        borderRadius: 10,
    },
});

export default styles;