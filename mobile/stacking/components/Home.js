import react, { useState } from "react";
import { StyleSheet, View } from "react-native"; 
import { Button, Text } from "react-native-elements";

export default function Home( {navigation} ){
    return (
        <View style={styles.container}>
            <Text> Hello world!!!</Text> 
            <Button title="Login" onPress={ () => navigation.navigate('Login') } />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    }
})