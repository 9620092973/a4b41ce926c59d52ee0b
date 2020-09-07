import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import axios from 'axios'
export default class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }

   postFeedback = async (search) => {
   console.log(
            search
        )
     /*  const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${search}`
      ); */
     
      axios.get(`https://restcountries.eu/rest/v2/name/${search}`)
      .then(response => {
    console.log("response",response)
        this.props.navigation.navigate("detail",{flag:response.data[0].flag?response.data[0].flag:response.data[1].flag,population:response.data[0].population?response.data[0].population:response.data[1].population,capital:response.data[0].capital?response.data[0].capital:response.data[1].capital,latlng:response.data[0].latlng?response.data[0].latlng:response.data[1].latlng})
      })
      .catch(error => {
          alert(

            "No countries found"
          )
        console.log(error);
      });
    
  
   }
      render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Country"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
        
            
            <TouchableOpacity
            disabled={this.state.email==""}
               style = {styles.submitButton}
               onPress = {
                  () => this.postFeedback(this.state.email)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}


const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})