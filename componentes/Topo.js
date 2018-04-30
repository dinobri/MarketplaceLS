import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { estilos } from "../styles/topo";

export default class Topo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarIndex: 0
        };
    }

    render() {
        return (
            <View>
                <View style={estilos.container}>
                    <View >
                        <Image source={require('../assets/navbar/gear.png')} style={estilos.iconeConfiguracao} />

                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 15 }} >
                        {/* <Image source={{uri: this.props.loja.img}} style={styles.logo} /> */}
                        <Image source={require('../img/logo.png')} style={estilos.logo} />

                        <View style={{ flexGrow: 1 }}>
                            <Text style={estilos.tituloLoja}>{this.props.loja.name}</Text>
                            <View style={estilos.infoItens}>
                                <InfoItem label="seguidores" value={this.props.loja.followers} />
                                <InfoItem label="seguindo" value={this.props.loja.following} />
                                <InfoItem label="coleções" value={this.props.loja.collections} />
                                <InfoItem label="curtidas" value={this.props.loja.likes} />
                            </View>
                        </View>

                    </View>

                    <View>
                        <Text style={estilos.descricaoLoja}>{this.props.loja.description}</Text>
                    </View>

                </View>

                <NavBar lista={['MINHA VITRINE', 'MEUS PRODUTOS']} />
            </View>
        );
    }
}

class InfoItem extends Component {
    render() {
        return (
            <View>
                <Text style={estilos.infoItemText}>{this.props.label}</Text>
                <Text style={[estilos.infoItemText, { fontSize: 20, fontWeight: 'bold' }]}>{this.props.value}</Text>
            </View>
        );
    }
}

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            indiceAtual: 0
        };
    }
    _isSelecionado(idx) {
        return this.state.indiceAtual === idx;
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {
                    this.props.lista.map((label, idx) => {
                        const isUltimo = idx === this.props.lista.length - 1;
                        return <TouchableOpacity key={idx}
                            onPress={() => this.setState({ indiceAtual: idx })}
                                style={[
                                    estilos.botoesAbas, 
                                    this._isSelecionado(idx) ? { borderBottomColor: '#FF1654' } : {},
                                    !isUltimo ? {borderRightWidth: 1} : {}
                                ]} 
                        >

                            <Text style={[estilos.botoesAbasTexto, this._isSelecionado(idx) ? { fontWeight: 'bold' } : {}]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    })
                }
            </View>
        );
    }
}



