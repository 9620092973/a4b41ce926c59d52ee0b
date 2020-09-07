import React, { Component } from 'react';
import { AppRegistry,TouchableOpacity, View, Image, StyleSheet ,Text} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import axios from 'axios'
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginLeft:100
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

class DisplayAnImage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            temp:'',
            wind:'',
            precip:'',
            icon:''
        
        };
      }
    postFeedback = async (search) => {
        console.log(
                 search
             )
          /*  const response = await axios.get(
             `https://restcountries.eu/rest/v2/name/${search}`
           ); */
          
           axios.get(`http://api.weatherstack.com/current?access_key=02c4c81eb8ab39bbb7308afd33728722&query=`+this.props.navigation.state.params.capital)
           .then(response => {
            console.log("response"+this.props.navigation.state.params.capital,response.data.current)
            this.setState({
                temp:response.data.current.temperature,
                precip:response.data.current.precip,
                wind:response.data.current.wind_speed,
                icon:response.data.current.weather_icons[0]
            })
           })
           .catch(error => {
               alert(
     
                 "No countries found"
               )
             console.log(error);
           });
         
       
        }
  render() {
      console.log(this.state)
    return (
        <View>
      <View style={styles.container}>
   
      
     
    <Text style={styles.baseText}>
      Capital: 
      <Text style={styles.innerText}> {this.props.navigation.state.params.capital}</Text>
    </Text>
    <Text style={styles.baseText}>
      Population: 
      <Text style={styles.innerText}> {this.props.navigation.state.params.population}</Text>
    </Text>
    <Text style={styles.baseText}>
      latlng: 
      <Text style={styles.innerText}> {this.props.navigation.state.params.latlng}</Text>
    </Text>
    <Image
      width="200"
      height="200"
      source={{uri: this.props.navigation.state.params.flag}}
    />
   
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={this.postFeedback}
      >
        <Text>Capital Weather</Text>
      
      </TouchableOpacity>
     {this.state.wind!="" &&(
     <View  style={styles.container}>
     <Text style={styles.baseText}>
      Temperature: 
      <Text style={styles.innerText}> {this.state.temp}</Text>
    </Text>
    <Text style={styles.baseText}>
      Wind_speed: 
      <Text style={styles.innerText}> {this.state.wind}</Text>
    </Text>
    <Text style={styles.baseText}>
      precip: 
      <Text style={styles.innerText}> {this.state.precip}</Text>
    </Text>
    <Image
      width="50"
      height="50"
      source={{uri: this.state.icon}}
    />
    </View>
    )
    
    }
      </View>
    );
  }
}

export default DisplayAnImage;