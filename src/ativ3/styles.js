import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 8,
        marginBottom: 20,
    },
    botao: {
        padding: 16,
        backgroundColor: '#000',
        alignItems: 'center',
        margin: 18,
        borderRadius: 20,
        flex:1
    },
    txtBotao: {
        color: '#f5f5f5',
        fontSize: 20,
    },
    botaoContainer:{ //alinhando os itens do container em formato de linha
        flexDirection: 'row',
        alignItems: "center"
    },
});

export default styles;