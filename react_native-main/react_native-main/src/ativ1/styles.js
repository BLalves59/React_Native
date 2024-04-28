import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E3F2FD',
        padding: 10,
        borderColor: '#2474ff',
        borderWidth: 10,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1565C0',
    },
    image: {
        maxWidth: '100%',
        width: '80%',
        height: '15%',
        margin: 10,
    },
}); 

export default styles;