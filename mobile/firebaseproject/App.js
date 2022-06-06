import React,{useState, useEffect} from 'react';
import {Text,View} from 'react-native';
// import firebase from './src/config/firebaseConfig';


export default function App(){


//Função pegaNome
 const [nome,setNome]=useState('Testando..');


//   useEffect(()=>{
   
//     async function Dados(){
//         await firebase.database().ref('nome').on('value',(snapshot)=>{
//             setNome(snapshot.val())

//         })
//     }
//     Dados();
//   },[]);

    return(
        <View style ={styles.container}>
            <Text> FireBase!{nome}</Text>
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
});
