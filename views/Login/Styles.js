import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerApp: {
    width:350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogin: {
    marginBottom: 40,
  },
  titleText: {
    color: '#f2f2f2',
    marginBottom: 80,
  },
  emailInput: {
    color: '#BCBCAF',
    marginLeft: 10,
  },
  passwordInput: {
    color: '#BCBCAF',
    marginLeft: 10,
  },
  buttonResetPassword: {
    color: '#BCBCAF',
    fontSize: 16,
    fontFamily:'Roboto',
    marginBottom: 25,
  },
  buttonInput: {
    width: 261,
    height: 50,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31312E',
    borderRadius: 8,
  },
  textSignUp: {
    color: '#BCBCAF',
    fontSize: 16,
    fontFamily:'Roboto',
    marginTop: 51,
    marginBottom: 16,
  },
  buttonSignUp: {
    color: '#BCBCAF',
    fontSize: 16,
    fontFamily:'Roboto',
  },
  
});

export default loginStyles