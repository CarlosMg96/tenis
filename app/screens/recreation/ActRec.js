import { StyleSheet, Text, View,  ScrollView  } from 'react-native';
import React from 'react';
import { Card, Button, Icon } from "react-native-elements";
import { FlatList } from 'react-native-gesture-handler';


export default function Search() {
  const data = [
    {id: 1, dia: "Martes", clase: "Físico", horario: "6:30 - 7:30 pm", extra: "Zumba", horario2: "7:30 - 8:30 pm",},
    {id: 2, dia: "Miércoles", clase: "Físico", horario: "6:30 - 7:30 pm",},
    {id: 3, dia: "Jueves", clase: "Zumba", horario: "7:30 - 8:30 pm",},
    {id: 4, dia: "Viernes", clase: "Acondicionamiento físico", horario: "6:30 - 7:30 pm",},
    {id: 5, dia: "Sábado", clase: "Zumba", horario: "9:30 - 10:30 am",},
  ]
  return (
    <View>
      <FlatList
      data={data}
      keyExtractor= {(item)=>{
        return item.id;
      }}
      renderItem={({item})=>{
        return (
          <Card style={styles.cardContainer}>
        <Card.Title>{item.dia}</Card.Title>
        <Card.Divider />
        <Text style={styles.descripcion}>
          {item.clase}
          {"\n"}{item.horario}
        </Text>
        {item.extra? <Text style={styles.extra}>{"\n"}{item.extra} {"\n"}{item.horario2}</Text>: null}

      </Card>
        )
      }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    color:"gray",
    
  },
  extra:{
    textAlign:"center",
  },
  descripcion: {
    textAlign:"center",
  },

});
