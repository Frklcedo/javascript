import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class App extends Component{
  state = {
    nome: 'mundo'
  };
  mudarNome= () => {
    this.setState({ nome: 'Franklin'});
  }
  onChangeText = (nome) => {
    this.setState({nome});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Olá, {this.state.nome}!</Text>
        <TextInput value={this.state.nome} onChangeText={this.onChangeText = this.onChangeText} style={styles.textInput} />
        <Button title='Default' onPress={this.mudarNome}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '1.2em',
    fontWeight: '200',
    textAlign: 'center'
  },
  textInput:{
    color: '#dde',
    textAlign: 'center',
    fontWeight: 'bold',
    border: 'solid #ded 2px',
    padding: '3px',
    backgroundColor: '#333',
    margin: '15px'
  }
});
