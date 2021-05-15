import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import firebase from 'firebase';
import db from '../config'

import { RFValue } from "react-native-responsive-fontsize";

export default class WriteStoryScreen extends Component{
  constructor(){
    super()
    this.state={
      title:'',
      author:'',
      story:''


    }
  }
  submitStory=()=>{
  console.log(db.collection('story'))
    db.collection('story').add({
      title:this.state.title,
      author:this.state.author,
      story:this.state.story
    })
    this.setState({
      title:'',
      author:'',
      story:'',
    })
  }
  render(){
    return(
      <View>
<Text style={styles.label}>TITLE</Text>
<TextInput
    style={styles.formTextInput}
    placeholder ={"TITLE"}
    onChangeText={(text)=>{
      this.setState({
        title:text
      })
    }}
  />  
  <Text style={styles.label}>AUTHOR</Text>
  <TextInput
  style={styles.formTextInput}
  placeholder ={"AUTHOR"}
  onChangeText={(author)=>{
    this.setState({
      title:author
    })
  }}
 
/>  
<Text style={styles.label}>Write story</Text>
  <TextInput
  style={styles.formTextInput}
  placeholder ={"Write story"}
  onChangeText={(story)=>{
    this.setState({
      title:story
    })
  }}
   multiline={true}
/> 
<TouchableOpacity onPress={()=>{
  this.submitStory()
}}>
<Text style={styles.buttonText}>SUBMIT</Text>

</TouchableOpacity>
</View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10
  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
  }
});

