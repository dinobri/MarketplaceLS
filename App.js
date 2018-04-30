import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Topo from "./componentes/Topo";
import Lista from "./componentes/Lista";
import TabBar from "./componentes/TabBar";

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      isDadosCarregados: false,
      dataFeed: null
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isDadosCarregados: true,
        dataFeed: require('./assets/dados/feed.json')
      })
    }, 1500)
  }

  _renderLoader() {
    return (
      <Text style={{alignSelf: 'center'}}>
        Carregando dados...
      </Text>
    );
  }

  _renderConteudo() {
    return (
      <View style={{flex: 1}}>
        <Topo loja={this.state.dataFeed.store.profile} />
        <Lista dados={this.state.dataFeed.store.timeline} />
        <TabBar />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isDadosCarregados ? this._renderConteudo() : this._renderLoader()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  }
});
