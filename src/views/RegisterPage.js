import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Button, Keyboard} from 'react-native';
import {StyleSheet} from 'react-native';
import withConnect from './withConnect';
import productsAPI from '../store/api/authentication';

const RegisterPage = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nameFocus, setNameFocus] = useState(false);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.styledTitle}>REGISTER</Text>
      <Text style={styles.styledText}>Email</Text>
      <TextInput
        style={
          !nameFocus
            ? styles.textInput
            : {...styles.textInput, borderBottomColor: 'blue'}
        }
        placeholder={'enter Email'}
        onFocus={() => {
          setNameFocus(true);
        }}
        onBlur={() => {
          setNameFocus(false);
        }}
        keyboardType={'email-address'}
        onSubmitEditing={Keyboard.dismiss}
        autoCapitalize={'none'}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <Text style={styles.styledText}>Password</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder={'enter password'}
        autoCapitalize={'none'}
        onSubmitEditing={Keyboard.dismiss}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Text style={styles.styledRouterText} onPress={()=>{
        navigation.push('login');
      }}>Get back to login page?</Text>
      <View style={styles.styledButton}>
      <Button
        onPress={() =>
          productsAPI.registerUserApi({email: email, password: password})
        }
        title={'Sign up'}
      />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    fontSize: 15,
  },
  styledRouterText:{
    color:'blue',
    textAlign:'right',
    marginRight:10
  },
  styledTitle:{
    fontSize:30,
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:60
  },
  styledRouterText:{
    color:'blue',
    textAlign:'right',
    marginRight:10
  },
  styledText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'black',
  },
  textInput: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 0,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
    color: 'black',
  },
  styledButton: {
    marginTop: 50,
  },
  identificationMark: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default withConnect(RegisterPage);
