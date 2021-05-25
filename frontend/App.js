import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import Home from "./components/Home";
import Redirect from "./components/Redirect";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
  export default function App() {

      return (
        
        <NativeRouter>
          <View style={styles.container}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/redirect/:id" component={Redirect} />
            </Switch>
          </View>
        </NativeRouter>
      );
    }
    
  
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ace5ee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#f1f9f9',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});


