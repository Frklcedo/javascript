import { addDoc, doc, getDoc, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import react, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import fb, { db, auth, colRef } from './src/Connection'

export default function App() {

  const [nome, setNome] = useState('teste')
  const [nomedb, setNomedb] = useState()
  const [idade, setIdade] = useState()
  const [message, setMessage] = useState()
  const [id, setId] = useState()
  const [logmessage, setLogmessage] = useState('')

  const dados = async () => {
    const docRef = doc(db, 'usuarios', 'RikDzjxU2Tbf64G4EQZJ')

    getDoc(docRef).then((doc) => {
      console.log(doc.data())
      setNome(doc.data().nome)
    }).catch(err => {
      console.log(err)
    })
  }

  const idadeInp = (age) => {
    const regex = /[^0-9]/;
    const idadenc = age.replace(regex, '');
    console.log(regex.test(idadenc))
    while(regex.test(idadenc)){
      idadenc = age.replace(regex, '');
    }
    console.log(idadenc)
    setIdade(idadenc);
  }
  const criarConta = async () => {
    const regex = /[^0-9]/;
    if(regex.test(idade) && idade == '' && nome){

    }
    else{
      addDoc(colRef, {
        nome: nomedb,
        idade: parseInt(idade),
        createdAt: serverTimestamp()
      }).then(() => {
        setIdade('')
        setNomedb('')
        setMessage('usuário cadastrado com sucesso')
        setTimeout(() => {
          setMessage('')
        }, 3000)
      })
    }
  }

  const logarConta = async () => {
    const regex = /[^0-9]/;
      if(regex.test(idade) && idade == '' && nome){

      }
      else if(logmessage != ''){
        setLogmessage('')
      }
      else{
        const q = query(colRef, where('nome', '==', nomedb, '&&', 'idade', '==', idade));
        getDocs(q).then((snapshot) => {
          const dbdocs = snapshot.docs
          let haslogged = false
          dbdocs.forEach(doc => {
            const docdata = doc.data() 
            console.log(typeof doc.id)
            if (docdata.nome == nomedb && docdata.idade == idade){
              setId(doc.id)
              haslogged = true
            }
          })
          if(haslogged){
            setIdade('')
            setNomedb('')
            setLogmessage(`nome: ${nomedb} idade: ${idade} id: ${id}`)
            setMessage('usuário logado com sucesso')
            setTimeout(() => {
            setMessage('')
            }, 3000)
          }
          else{
            setMessage('usuário não encontrado')
            setTimeout(() => {
            setMessage('')
            }, 3000)
          }
        })
      }
  }

  return(
        <View style ={styles.container}>
            <Text> FireBase! {nome}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => dados()} >Click para banco de dados</TouchableOpacity>

            <View style={styles.logged}>
              <Text>{logmessage}</Text>
            </View>

            <View style={styles.form}>
              <Text> Nome </Text>
              <TextInput style={styles.inp} onChangeText={nome => setNomedb(nome.trim())} value={nomedb} />
              <Text> Idade </Text>
              <TextInput keyboardType="numeric"style={styles.inp} onChangeText={idade => idadeInp(idade.trim())} value={idade}/>

              <View style={styles.inpButtons}>
                <TouchableOpacity style={styles.btn} onPress={() => {logarConta()}} >Logar no banco</TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => {criarConta()}} >Criar usuario</TouchableOpacity>
              </View>
              <Text>{message}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logged: {
    margin: 20
  },
  inpButtons: {
    flex: 1,
    flexDirection: 'row',
    gap: 5
  },
  btn: {
    textAlign: 'center',
    fontSize: '0.8em',
    color: '#fff',
    backgroundColor: "#4499f1",
    border: "1px solid #eee",
    padding: 15
  },
  btn2: {
    textAlign: 'center',
    fontSize: '0.8em',
    color: '#4499f1',
    backgroundColor: "#fff",
    border: "1px solid #4499f1",
    padding: 15
  },
  form: {
    border: '2px solid #4499f1',
    margin: 20,
    padding: 20
  },
  inp: {
    margin: 10,
    padding: 5,
    textAlign: 'center',
    border: '2px solid #4499f1',
  }
});
