import React, { useState } from "react";
import config from "../../config/config.json";
import { View, Image } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import loginStyles from "./Styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassowrd] = useState(null);
  const [isSelected, setSelected] = useState(true);
  const [message, setMessage] = useState(null);
  const [result, setResult] = useState(null);

  // Fazer Login
  async function doLogin() {
    let read = await fetch(config.urlRootNode + "read", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailUser: email,
        passwordUser: password,
      }),
    });
    let ress = await read.json();
    //Keyboard.dismiss();
    setResult(ress);
    if (result === "sucesso") {
      console.log(result);
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }

  const passwordView = "eye";

  const viewPassword = () => {
    setSelected(!isSelected);
  };

  // Chamando pagina Home

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  // Chamando pagina Reset Password

  const resetPassord = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "resetPassord" }],
    });
  };

  // Chamando pagina Sign Up

  const signUp = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SignUp" }],
    });
  };

  return (
    <LinearGradient
      style={loginStyles.containerLogin}
      colors={["#1D1D19", "#565609"]}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 1, y: 1 }}
    >
      <Image
        style={loginStyles.imageLogin}
        source={require("../../assets/img/logoRiseFinance.png")}
      />

      <Text h3 style={loginStyles.titleText}>
        Sign In
      </Text>
      <Text>{message}</Text>

      <View style={loginStyles.containerApp}>
        <Input
          placeholder="E-mail"
          leftIcon={{
            type: "font-awesome",
            name: "envelope",
            color: "#BCBCAF",
            size: 18,
          }}
          style={loginStyles.emailInput}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <Input
          placeholder="Senha"
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            color: "#BCBCAF",
            size: 18,
          }}
          rightIcon={{
            type: "font-awesome",
            name: passwordView,
            color: "#BCBCAF",
            size: 18,
            onPress: () => viewPassword(),
          }}
          style={loginStyles.passwordInput}
          onChangeText={(text) => setPassowrd(text)}
          secureTextEntry={isSelected}
        />
        <Text
          style={loginStyles.buttonResetPassword}
          onPress={() => resetPassord()}
        >
          Esqueci a senha
        </Text>

        <Button
          title="Entrar"
          onPress={doLogin}
          buttonStyle={loginStyles.buttonInput}
        />

        <Text style={loginStyles.textSignUp}>Ainda não possui conta?</Text>

        <Text style={loginStyles.buttonSignUp} onPress={() => signUp()}>
          Registre-se aqui
        </Text>
      </View>
    </LinearGradient>
  );
}
