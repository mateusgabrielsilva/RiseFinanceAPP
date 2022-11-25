import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Login/Index';
import Home from './views/Home/Index';
import SignUp from './views/SignUp/Index';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='Login' component={Login}
      />

      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='Home' component={Home}
      />

      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='SignUp' component={SignUp}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

