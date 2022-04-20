import react, { useState } from "react";
import { StyleSheet, View, Text } from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home";
import Login from "./components/Login";

const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}