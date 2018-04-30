import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class TabBar extends Component {
    render() {
        return (
            <View style={estilos.container}>
                <TabBarItem imgSrc={require('../assets/tabbar/cart.png')} label="Pedidos" />
                <TabBarItem imgSrc={require('../assets/tabbar/shop.png')} label="Minha loja" />
                <TabBarItem imgSrc={require('../assets/tabbar/bag.png')} label="Estoque" />
                <TabBarItem imgSrc={require('../assets/tabbar/chat.png')} label="Mensagem" />
                <TabBarItem imgSrc={require('../assets/tabbar/chart.png')} label="Números" />
            </View>
        );
    }
}

class TabBarItem extends Component {
    render() {
        return (
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => console.log(`TabBar: ${this.props.label}`)}>
                <Image source={this.props.imgSrc} />
                <Text>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}


const estilos = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingRight: 15,
        paddingLeft: 15
    }
});