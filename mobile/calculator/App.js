import { StyleSheet, View, Button, Text } from "react-native";
import react,{ useState } from "react";

export default function App(){
    
  const [result,setResult] = useState(0);
  const [calc,setCalc] = useState(' ');

  const calcBase = (c) => {
    const valid = /[0-9]$/;
    if(calc == ' '){
      setCalc(c);
    }
    else{
      if(valid.test(calc)){
        if(valid.test(c)){
          let calcsplit = calc.toString().split(' ');
          calcsplit[calcsplit.length-1] = calcsplit[calcsplit.length-1] * 10 + c;
          setCalc(calcsplit.join(' '));
        }
        else{
          setCalc(calc.toString() + ' ' + c);
        }
      }
      else{
        if(valid.test(c)){
          setCalc(calc + ' ' + c);
        }
        else{
          let calcsplit = calc.toString().split(' ');
          calcsplit[calcsplit.length-1] = c;
          setCalc(calcsplit.join(' '));
        }
      }
    }
  }

  const multiplicacao = (i, j) => {
    let a = parseFloat(i);
    let b = parseFloat(j);
    return a * b;
  }
  const divisao = (i, j) => {
    let a = parseFloat(i);
    let b = parseFloat(j);
    return a / b;
  }
  const adicao = (i, j) => {
    let a = parseFloat(i);
    let b = parseFloat(j);
    return a + b;
  }
  const subtracao = (i, j) => {
    let a = parseFloat(i);
    let b = parseFloat(j);
    return a - b;
  }
  const efetuarCalc = () => {
    const valid = /[^0-9]$/;
    let op = [...calc.toString().split(' ')];
    let last = op.pop();
    if(!valid.test(last)){
      op = [...op,last];
    }
    if(op.length == 1){
      setResult(op[0]);
      setCalc(' ');
    }
    else if(op.length != 0){
      if(valid.test(op[0])){
        op = [result.toString(), ...op];
      }
      console.log(op);
      for(let i = 0; i<op.length;i++){
        let j = i-1;
        if(op[j] == '*'){
          op[i] = multiplicacao(op[i], op[j-1]);
          console.log(op[i]);
          op[j] = op[j-1] = 'useless';
        }
        if(op[j] == '/'){
          op[i] = divisao(op[j-1], op[i]);
          op[j] = op[j-1] = 'useless';
        }
      }
      let somaexpress = op.filter(c => c !== 'useless');
      for(let i = 0; i<somaexpress.length;i++){
        let j = i-1;
        if(somaexpress[j] == '+'){
          somaexpress[i] = adicao(somaexpress[i], somaexpress[j-1]);
          somaexpress[j] = somaexpress[j-1] = 'useless';
        }
        if(somaexpress[j] == '-'){
          somaexpress[i] = subtracao(somaexpress[j-1], somaexpress[i]);
          somaexpress[j] = somaexpress[j-1] = 'useless';
        }
      }
      let resultado = somaexpress.filter(c => c !== 'useless');
      setResult(resultado.join(' '));
      setCalc(' ');
      /*
      */
    }
  }
  const enviarCaracter = (c) => {
    if(c == 'c'){
      setResult(0);
      setCalc(' ');
    }
    else{
      if(c == '='){
        efetuarCalc();
      }
      else{
        calcBase(c);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.calcArea}>
        <Text style={styles.result}>{result}</Text>
        <Text style={styles.calcBase}>{calc}</Text>
        <View style={styles.calculator}>
          <Button title="1" onPress={() => enviarCaracter(1)}/>
          <Button title="2" onPress={() => enviarCaracter(2)}/>
          <Button title="3" onPress={() => enviarCaracter(3)}/>
          <Button title="+" onPress={() => enviarCaracter('+')}/>
          <Button title="4" onPress={() => enviarCaracter(4)}/>
          <Button title="5" onPress={() => enviarCaracter(5)}/>
          <Button title="6" onPress={() => enviarCaracter(6)}/>
          <Button title="-" onPress={() => enviarCaracter('-')}/>
          <Button title="7" onPress={() => enviarCaracter(7)}/>
          <Button title="8" onPress={() => enviarCaracter(8)}/>
          <Button title="9" onPress={() => enviarCaracter(9)}/>
          <Button title="*" onPress={() => enviarCaracter('*')}/>
          <Button title="C" onPress={() => enviarCaracter('c')}/>
          <Button title="0" onPress={() => enviarCaracter(0)}/>
          <Button title="/" onPress={() => enviarCaracter('/')}/>
          <Button title="=" onPress={() => enviarCaracter('=')}/>
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calcArea: {
    width: '30%',
    minWidth: 200,
    padding: 5,
    border: ''
  },
  result:{
    color: '#121212',
    fontSize: '1.1em',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  calcBase: {
    color: '#666',
    textAlign: 'right',
    fontSize: '0.8em',
    marginBottom: 6,
    marginTop: 2
  },
  calculator: {
    display: 'grid',
    gap: 4,
    gridTemplateColumns: 'auto auto auto 20%',
  }
});