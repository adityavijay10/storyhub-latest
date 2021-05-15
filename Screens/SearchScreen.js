import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';



export default class SearchScreen extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        allStories: [],
        lastVisibleTransaction: null,
        search:''
      }
    }

    fetchMoreStories = async ()=>{
      var text = this.state.search.toUpperCase()
      var enteredText = text.split("")

      
      if (enteredText[0].toUpperCase() ==='B'){
      const query = await db.collection("stories").where('bookName','==',text).startAfter(this.state.lastVisibleStories).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allStories: [...this.state.allStories, doc.data()],
          lastVisibleStories: doc
        })
      })
    }
      else if(enteredText[0].toUpperCase() === 'S'){
        const query = await db.collection("stories").where('bookName','==',text).startAfter(this.state.lastVisibleStories).limit(10).get()
        query.docs.map((doc)=>{
          this.setState({
            allStories: [...this.state.allTransactions, doc.data()],
            lastVisibleStories: doc
          })
        })
      }
  }

    searchStories= async(text) =>{
      var enteredText = text.split("")
      var text = text.toUpperCase()
  
      
      if (enteredText[0].toUpperCase() ==='B'){
        const stories =  await db.collection("stories").where('bookName','==',text).get()
        stories.docs.map((doc)=>{
          this.setState({
            allStories:[...this.state.allStories,doc.data()],
            lastVisibleStories: doc
          })
        })
      }
      else if(enteredText[0].toUpperCase() === 'S'){
        const stories = await db.collection('stories').where('authorName','==',text).get()
        stories.docs.map((doc)=>{
          this.setState({
            allStories:[...this.state.allStories,doc.data()],
            lastVisibleStories: doc
          })
        })
      }
    }

    componentDidMount = async ()=>{
      const query = await db.collection("stories").limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allStories: [],
          lastVisibleStories: doc
        })
      })
    }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.searchBar}>
        <TextInput 
          style ={styles.bar}
          placeholder = "Enter Book name or Author name"
          onChangeText={(text)=>{this.setState({search:text})}}/>
          <TouchableOpacity
            style = {styles.searchButton}
            onPress={()=>{this.searchTransactions(this.state.search)}}
          >
            <Text>Search</Text>
          </TouchableOpacity>
          </View>
        <FlatList
          data={this.state.allTransactions}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
              <Text>{"Book name: " + item.bookId}</Text>
              <Text>{"Author name: " + item.studentId}</Text>
             
            </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
          onEndReached ={this.fetchMoreTransactions}
          onEndReachedThreshold={0.7}
        /> 
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })