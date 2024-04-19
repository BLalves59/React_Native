import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#ffcdd2', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        borderRadius: 20, 
    }, 
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: '#b71c1c', 
        justifyContent: 'flex-start',
    }, 
    txtSaida: {
        margin: 10, 
        fontWeight: 'bold', 
        fontSize: 20, 
        color: '#e53935', 
        alignItems: 'flex-start',
    }, 
    txtEntrada: {
        borderWidth: 3, 
        textAlign: 'center', 
        fontSize: 22, 
        borderColor: '#b71c1c', 
        height: 40, 
        width: '70%', 
        color: '#e53935', 
        borderRadius: 10, 
    }, 
    botao: {
        width: '70%', 
        padding: 16, 
        backgroundColor: '#b71c1c', 
        alignItems: 'center', 
        margin: 18, 
        borderRadius: 20, 
    }, 
    txtBotao: {
        color: '#f5f5f5', 
        fontSize: 20,         
    },
    container2: {
        height: 40, 
        width: '70%', 
        backgroundColor: '#ffcdd2', 
        justifyContent: 'center', 
        alignItems: 'row',
    }, 
}); 

export default styles;