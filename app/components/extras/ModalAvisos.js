import React, { useState } from "react";
import { Text, Modal, View, Switch } from "react-native";
import { Button } from "react-native-elements";
import Avisos from "../../screens/ad/Ad";
import ToggleSwitch from "toggle-switch-react-native";

export default function ModalAvisos({
  isModalOpen,
  setIsModalOpen,
  isOpcionMode,
}) {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);
  const [switch5, setSwitch5] = useState(false);

  

  const modalOpcions = [
    {
      title: "🧘🏻 Yoga",
      value: switch1,
      setSwitch: setSwitch1,
    },
    {
      title: "🍽️ Restaurant",
      value: switch2,
      setSwitch: setSwitch2,
    },
    {
      title: "🏨 Hotel",
      value: switch3,
      setSwitch: setSwitch3,
    },
  ];

  const modalContainerStyle = {
    flex: 1,
    justifyContent: "flex-end",
  };
  const modalStyle = {
    //     backgroundColor: isDarkMode ? 'black' : 'white',
    backgroundColor: "white",
    alignItems: "center",
    margin: 20,
    borderRadius: 16,
    paddingHorizontal: 30,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  };
  const titleStyle = {
    //  color: isDarkMode ? 'white' : 'black',
    fontSize: 20,
    fontWeight: "bold",
  };
  const optionTextStyle = {
    fontSize: 18,
    fontWeight: "500",
    //  color: isDarkMode ? 'white' : 'black',
  };
  const optionContainer = {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 10,
  };

  // const opcionOfSearch = async() => {
  //   if (isOpcionMode) {
  //     await Avisos()
  //   } else {

  //   }
  // }

  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={"slide"}>
        <View style={modalContainerStyle}>
          <View style={modalStyle}>
            <Text style={titleStyle}>Seleccione la categoría{"\n"}</Text>
            
            {modalOpcions.map((option, index) => {
              return (
                <View style={optionContainer} key={index}>
                  <Text style={optionTextStyle}>{option.title}</Text>
                  {/* <Switch
                        value={option.value}
                        onValueChange={option.setSwitch}
                      /> */}
                  <ToggleSwitch
                    isOn={modalOpcions?.value}
                    onColor="#A0BC32"
                    offColor="gray"
                    label={modalOpcions.title}
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="medium"
                    onToggle={option.setSwitch}
                  />
                </View>
              );
            })}

         
            <Button
              title="Cerrar y guardar"
              onPress={() => setIsModalOpen(!setIsModalOpen)}
              type="clear"
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
