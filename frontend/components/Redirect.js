import React, {useState, useEffect} from 'react';
import { View, Text, Button,TouchableHighlight,StyleSheet,Image
} from "react-native";
import axios from 'react-native-axios';
import logo from '../assets/logo.png';
import {

  useParams
} from "react-router-dom";
import * as Print from 'expo-print';



export default function Redirect({history}) { 
  const [dataa, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {axios.get(`http://127.0.0.1:8000/api/Credentials`).then(({data}) => {
    console.log(data);
    data.map((data) => {data.id == id? setData(data) : null})
    
  }).catch((err) => console.error(err));}, [])



 
  
 

  return (
    <View style={styles.container}>
      <View>
      <Image source={logo}
      style={{ width: 200, height: 200,marginRight:195,marginBottom:60,marginTop:-50, }}/>
      </View>
  <View>
    {console.log(dataa)}
    <Text>Firstname : {dataa.FirstName}</Text>
    <Text>Lastname : {dataa.LastName}</Text>

    <TouchableHighlight 
                style ={{
                    height: 40,
                    width:100,
                    borderRadius:10,
                    marginLeft :30,
                    marginTop :40
                }}>
     <Button title="Get back" onPress={() => history.push("/")} /> 
     </TouchableHighlight>
     <TouchableHighlight 
                style ={{
                    height: 40,
                    width:100,
                    borderRadius:10,
                    marginLeft :30,
                    marginTop :20,
                }}>
     <Button title="Print" onPress={() => {Print.printAsync({
      html: '<h1>Custom converted PDF Document</h1>',
      fileName: 'test',
      base64: true,
    })}}/> 
     </TouchableHighlight>
     
  </View>
  </View>
)};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ace5ee',
    alignItems: 'center',
    justifyContent: 'center',
  }});