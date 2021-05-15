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
  ScrollView,
  FlatList
} from "react-native";
import db from '../config'
import firebase from 'firebase'
export default class ReadStoryScreen extends React.Component{
    constructor(){
        super()
        this.state={
            allStories:[],


        }
    }
    getStories=()=>{
        try{
            var allStories=[];
            db.collection("story").get().then((query)=>{
                query.forEach((doc)=>{
                    allStories.push(doc.data())
                })
            })
            this.setState({
                allStories:allStories
            })
        }
        catch(error){
            console.log(error)
        }

    }
    componentDidMount(){
        this.getStories()
    }
    render(){
        return(
          <View>
            <Text> read</Text>
            <FlatList
                data={
                    this.state.allStories

                }
                renderItem={
                    (item)=>(
                        <View>
                            <Text> Title:{item.title}</Text>
                            <Text> Author:{item.author}</Text>
                        </View>
                    )
                }
                keyExtractor={
                    (item,index)=>index.toString()
                }
            />
          </View>

        )
    }
}

  // style for read story
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },item: {
      backgroundColor: 'pink',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
     itemContainer: {
      height: 80,
      width:'100%',
      borderWidth: 2,
      borderColor: 'pink',
      justifyContent: 'center',
      alignSelf: 'center',
    }
  });
  