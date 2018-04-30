import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    lista: {
        flex: 1
    },
    card: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#FF7F50'
    },
    cardRodape: {
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    cardInfo: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 5
    },
    cardTitulo: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    cardIcone: {
        marginLeft: 12
    },
    cardTag: {
        marginRight: 6,
        color: '#A1A1A1'
    }
});