import React, {useState, useEffect} from 'react';
import axios from 'react-native-axios'
import {Text, StyleSheet, View, TextInput, Button,Image} from 'react-native';
import logo from '../assets/logo.png'
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Animated,
  Easing,
  Platform,
} from 'react-native';

export default function Home({history}) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [dataa, setData] = useState([]);
  const data = {
    firstname: firstname,
    lastname: lastname,
  }
  useEffect(() => {axios.get(`http://127.0.0.1:8000/api/Credentials`).then(({data}) => {
    console.log(data);
    setData(data)
    
  }).catch((err) => console.error(err));}, [])
  const submit = () => {axios.post(`http://127.0.0.1:8000/api/Credentials`, data)
  .then(({data}) => {
    axios.get(`http://127.0.0.1:8000/api/Credentials`).then(({data}) => {
    console.log(data);
    setData(data)})
    alert("Credendials submited check summary now")
  }).catch((err) => alert('first letter of the firstname should be capilized and lastname should be fully in capitals'));}
  
  return (
    <View style={styles.container}>
      <View>
      <Image source={logo}
      style={{ width: 200, height: 200,marginRight:195,marginBottom:60,marginTop:-50, }}/>
      </View>
      <View>
      
        <TextInput placeholder="Firstname :" style={styles.inputStyle} onChange={(e) => setFirstName(e.target.value)} />
        <TextInput placeholder="Lastname :" style={styles.inputStyle} onChange={(e) => setLastName(e.target.value)} />
  
        <TouchableHighlight 
                style ={{
                    height: 40,
                    width:100,
                    borderRadius:10,
                    marginLeft :100,
                    marginTop :40
                }}>
             <Button color='#118ab2' title="Save" onPress={() => {submit();}} />
             
             </TouchableHighlight>
             <TouchableHighlight 
                style ={{
                    height: 40,
                    width:100,
                    borderRadius:10,
                    marginLeft :100,
                    marginTop :40
                }}>
             <Button color='#118ab2' title="Summary" onPress={() => { setTimeout(history.push(`/redirect/${dataa.length}`), 5000) }} /> 
             </TouchableHighlight>
      </View>
    </View>
  );
};

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
  butto:{
  width: 100,
    height: 44,
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor:'black',
  }
});


