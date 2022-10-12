import React, { Component } from "react";
import { Text, View, Modal } from "react-native";
import { Button } from "react-native-elements";

export default function ModalPromotions(isModalOpen, setIsModalOpen) {
  const modalContainerStyle = {
    flex: 1,
    justifyContent: "flex-end",
  };

  const modalStyle = {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 16,
    paddingHorizontal:30,
    paddingVertical:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
  };

  const titleStyle ={
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  }

  const buttonStyle = {
    backgroundColor: "white",
  }


  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={'slide'}>
        <View style={modalContainerStyle}>
         <View style={modalStyle}>
         <Text style={titleStyle} > Cupón </Text>
         <Button style={buttonStyle} title="Cerrar" 
         onPress={() => setIsModalOpen(!setIsModalOpen)}
         ></Button>
         </View>
        </View>
      </Modal>
    </>
  );
}
