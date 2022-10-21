import React, { Component } from "react";
import { Text, View, Modal } from "react-native";
import { Button } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";

export default function ModalPromotions({isModalOpen, setIsModalOpen, id}) {
  const modalContainerStyle = {
    flex: 1,
    justifyContent: "flex-end",
  };


  const modalStyle = {
    backgroundColor: "white",
    margin: 25,
    borderRadius: 16,
    paddingHorizontal:30,
    paddingVertical:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 50,
    alignItems: "center",
  };

  const titleStyle ={
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  }

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
  }

  const titleStyleV ={
    color: "#A0BC32",
    fontSize: 20,
    fontWeight: "bold",
  }


  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={'slide'}>
        <View style={modalContainerStyle}>
         <View style={modalStyle}>
         <Text style={titleStyle} > Cupón  </Text>
         <Text>{id} {"\n"}</Text>
         <QRCode value={id} />
         <Text >{"\n"}</Text>
         <Button buttonStyle={buttonStyle} title="Cerrar" type="clear" titleStyle={titleStyleV}
         onPress={() => setIsModalOpen(!setIsModalOpen)}
         ></Button>
         </View>
        </View>
      </Modal>
    </>
  );
}
