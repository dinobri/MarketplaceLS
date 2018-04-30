
import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        paddingBottom: 15
    },
    logo: {
        width: 80,
        height: 80,
        marginRight: 15
    },
    iconeConfiguracao: {
        width: 28,
        height: 28,
        alignSelf: 'flex-end',
    },
    tituloLoja: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FF1654'
    },
    descricaoLoja: {
        fontSize: 16,
        color: '#A1A1A1'
    },
    infoItens: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoItemText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#000000'
    },
    botoesAbas: {
        flexGrow: 1,
        padding: 8,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC'
    },
    botoesAbasTexto: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FF1654'
    }
});