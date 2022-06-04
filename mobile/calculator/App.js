import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";
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
        <View style={styles.headerCalc}>
          <Text style={styles.result}>{result}</Text>
          <Text style={styles.calcBase}>{calc}</Text>
        </View>
        <View style={styles.calculator}>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter(1)}>
            <Text style={styles.innerBtn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter(2)}>
            <Text style={styles.innerBtn}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter(3)}>
            <Text style={styles.innerBtn}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={() => enviarCaracter('+')}>
            <Text style={styles.innerBtn}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter(4)}>
            <Text style={styles.innerBtn}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter(5)}>
            <Text style={styles.innerBtn}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter(6)}>
            <Text style={styles.innerBtn}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={() => enviarCaracter('-')}>
            <Text style={styles.innerBtn}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter(7)}>
            <Text style={styles.innerBtn}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter(8)}>
            <Text style={styles.innerBtn}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter(9)}>
            <Text style={styles.innerBtn}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={() => enviarCaracter('*')}>
            <Text style={styles.innerBtn}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter('c')}>
            <Text style={styles.innerBtn}>c</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => enviarCaracter(0)}>
            <Text style={styles.innerBtn}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={() => enviarCaracter('/')}>
            <Text style={styles.innerBtn}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={() => enviarCaracter('=')}>
            <Text style={styles.innerBtn}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  calcArea: {
    flex: 1,
    justifyContent: 'space-between',
    width: '90%',
    paddingTop: 30,
    paddingLeft: 10,
    paddingBottom: 30,
    paddingRight: 10,
    height: '90%'
  },
  result:{
    color: '#121212',
    fontSize: '1.5em',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  calcBase: {
    color: '#666',
    textAlign: 'right',
    fontSize: '1.1em',
    marginBottom: 6,
    marginTop: 2
  },
  calculator: {
    display: 'grid',
    gap: 4,
    gridTemplateColumns: 'auto auto auto auto',
    height: '80%'
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "50%",
    backgroundColor: "#21B847",
    height: 'same-as-width'
  },
  btn2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "50%",
    backgroundColor: "#B8212A",
    height: 'same-as-width'
  },
  innerBtn: {
    color: '#fff',
    fontSize: '1.2em'
  }
});