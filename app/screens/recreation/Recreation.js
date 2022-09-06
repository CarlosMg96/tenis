import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';
import Menu from './Menu'
import ActRec from'./ActRec';
import Information from './Information';
import { useNavigation } from "@react-navigation/native";


export default class Craigslist extends Component {

    
  constructor(props) {
 //   console.log(props);
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Actividades recreativas",   image:"https://cdn.pixabay.com/photo/2020/09/08/06/23/yoga-5553731_1280.png",  info: "Explora ahora"},
        {id:2,  name: "Información del Hotel",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       info: "Explora más"},
        {id:3,  name: "Menú del Restaurant",       image:"https://cdn-icons-png.flaticon.com/512/3448/3448653.png", info: "Explora más"} ,
        
      ]
    };
  }


  clickEventListener = (item, props) => {
     const { navigation } = this.props;
    console.log(item.id);
    if (item.id === 1) {
      console.log("Recreacion")
      return (navigation.navigate("Recreativas")) 
    } 
    if (item.id === 2){
      console.log("Hotel")
      return ( navigation.navigate("Information"))
    } 
    if (item.id === 3) {
      console.log("Menú del restaurant") ;
      return (navigation.navigate("Menu"))
    } 
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.Info}>{item.info}</Text>
                <TouchableOpacity style={styles.followButton} >
                  <Text style={styles.followButtonText}>Explore no</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008000",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:23,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#fff",
  },
  followButtonText:{
    color: "#fff",
    fontSize:12,
  },
}); 