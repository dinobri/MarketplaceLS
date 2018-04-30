import React, { Component } from 'react';
import { Text, View, Image, Button, FlatList, TouchableOpacity } from 'react-native';
import { estilos } from "../styles/lista";
import numeral from "numeral";

import imgFirst from '../img/first.png';
import imgSecond from '../img/second.png';

export default class Lista extends Component {

    render() {
        return (
            <View style={estilos.container}>
                <FlatList style={estilos.lista}
                    data={this.props.dados}
                    renderItem={
                        ({ item }) => <Card item={item} key={item.id.toString()} />
                    }
                    keyExtractor={item => item.id.toString()}
                />
                <TouchableOpacity onPress={() => console.log('Botão flutuante (+)')} 
                    style={{position: 'absolute', bottom: 25, right: 25}}>
                    <Image source={require('../assets/floating_button/add_button.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}


class Card extends Component {
    constructor(){
        super();
        this.state = {
            imgOffset: -1
        }
    }

    render() {
        let imagem = this.props.item.img === '../img/first.png' ? imgFirst : imgSecond;

        return (
            <View style={estilos.card} >
                <View >
                    <Image source={imagem} 
                        onLayout={event => {
                            this.setState({imgOffset: event.nativeEvent.layout.x});
                        }}
                        style={{ flex: 1, alignSelf: 'center' }} />
                        {
                            this.props.item.dots.map(dot => 
                                <DotButton key={dot.x * dot.y}
                                    posX={dot.x + this.state.imgOffset} posY={dot.y} />)
                        }
                </View>

                <View style={estilos.cardRodape} >
                    <View style={estilos.cardInfo} >
                        <Text style={estilos.cardTitulo}>{this.props.item.name}</Text>
                        <Text style={{ fontSize: 12 }}>{numeral(this.props.item.likes).format('0.0a')} gostaram</Text>
                        <Image source={require('../assets/card/heart.png')} style={[estilos.cardIcone]} />
                        <Image source={require('../assets/card/share.png')} style={[estilos.cardIcone]} />
                        <Image source={require('../assets/card/menu.png')} style={[estilos.cardIcone]} />
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                        <Text style={[estilos.cardTag, { color: '#FF1654' }]} >TAGS</Text>
                        {this.props.item.tags.map(tag => <Text key={tag} style={estilos.cardTag}>#{tag}</Text>)}
                    </View>

                </View>

            </View>
        );
    }
}

class DotButton extends Component {
    render() {
        return (
            <TouchableOpacity style={{ position: 'absolute', top: this.props.posY, left: this.props.posX}}
                onPress={() => alert(`Dot clicado. X: ${numeral(this.props.posX).format(0)}. Y: ${this.props.posY}`)}>
                <Image source={require('../assets/card/dot.png')} />
            </TouchableOpacity>
        );
    }
}