import React, { useState } from "react";
import config from "../../config/config.json";
import { View, Image } from 'react-native';
import { Button, Input, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import loginStyles from "./Styles";


export default function SignUp({navigation}) {

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassowrd] = useState(null)
  const [isSelected, setSelected] = useState(true)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorName, setErrorName] = useState(null)

  //Pegar data e hora local 
  //const hour = new Date().toLocaleString();

  // Envia os dados do Formulario para o backend
  async function registerUser()
  {

    console.log(name)
      let reqs = await fetch(config.urlRootNode+'create',{
          method: 'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body: JSON.stringify({
              nameUser: name,
              passwordUser: password,
              emailUser: email
          })
      }); 
  }
  
  // Chamando pagina Login

  const Login = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
    })
    
  }

  return(
    <LinearGradient 
      style={loginStyles.containerLogin}
      colors={["#1D1D19", "#565609"]}
      start={{x: 0, y: 0.1}}
      end={{x: 1, y: 1}}
    >
      <Image
        style={loginStyles.imageLogin}
        source={require('../../assets/img/logoRiseFinance.png')}
      />

      <Text h3 style={loginStyles.titleText}>Sign Up</Text>

      <View style={loginStyles.containerApp}>

        <Input
          placeholder="Nome"
          leftIcon={{type: 'font-awesome', name: 'user', color:'#BCBCAF', size: 18}}
          style={loginStyles.nameInput}
          onChangeText={(text) => setName(text)}
          errorMessage={errorName}
        />

        <Input
          placeholder="E-mail"
          leftIcon={{type: 'font-awesome', name: 'envelope', color:'#BCBCAF', size: 18}}
          style={loginStyles.emailInput}
          onChangeText={(text) => setEmail(text)}
          keyboardType='email-address'
          errorMessage={errorEmail}
        />

        <Input
          placeholder="Senha"
          leftIcon={{type: 'font-awesome', name: 'lock', color:'#BCBCAF', size: 18}}
          rightIcon={{type: 'font-awesome', name: 'eye-slash', color:'#BCBCAF', size: 18, onPress:() => setSelected(!isSelected)}}
          style={loginStyles.passwordInput}
          onChangeText={(text) => setPassowrd(text)}
          secureTextEntry= {isSelected}
        />


        <Button
          title= 'Cadastrar'
          onPress={registerUser}
          buttonStyle={loginStyles.buttonCadastrar}
        />

        <Text
          style={loginStyles.textSignUp}
        >
          Ja possui conta?
        </Text>

        <Text
          style={loginStyles.buttonReturnSignIn}
          onPress={()=> Login()}
        >
          Entre aqui 
        </Text>
      </View>
    </LinearGradient>
  )
}

