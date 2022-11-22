import React, { useEffect, useState } from "react";
import { Text, Modal, View, Switch, Alert } from "react-native";
import { Button } from "react-native-elements";
import Avisos from "../../screens/ad/Ad";
import ToggleSwitch from "toggle-switch-react-native";
import { async } from "@firebase/util";
import { set } from "lodash";

export default function ModalAvisos({
  isModalOpen,
  setIsModalOpen,
  isOpcionCategory,
}) {
  // Yoga
  const [switch1, setSwitch1] = useState(false);
  // Restaurant
  const [switch2, setSwitch2] = useState(false);
  // Hotel
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);
  const [switch5, setSwitch5] = useState(false);
  const [valor, setValor] = useState("");
  const [reloading, setReloading] = useState(false);

  // const modalOpcions = [
  //   {
  //     title: "🧘🏻 Yoga",
  //     value: switch1,
  //     setSwitch: setSwitch1,
  //   },
  //   {
  //     title: "🍽️ Restaurant",
  //     value: switch2,
  //     setSwitch: setSwitch2,
  //   },
  //   {
  //     title: "🏨 Hotel",
  //     value: switch3,
  //     setSwitch: setSwitch3,
  //   },
  // ];

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

  // useEffect(() => {
  //   console.log("Se esta ejecutando el useEfect");
  //   SendData();
  //   // setReloading(false)
  // }, [reloading]);

  const SendData = async () => {
  //      console.log("valor: "+valor);
  //      let selecter = await Avisos(valor);
  console.log("se supone que llega a esta función");
    <Avisos dataRe={valor} />
  //       console.log("Lleva algo"+selecter);
  console.log("Send Data: "+valor)
  };

  const enableSwitch = () => {
    console.log("enableSwitch");
    console.log("1: " + switch1);
    console.log("2: " + switch2);
    console.log("3: " + switch3);
    console.log("----------------------------------------------------------------")

    if (switch1 === true) {
      setValor("Yoga");
      // setSwitch2(false);
      // setSwitch3(false);
    }

    if (switch2 === true) {
      setValor("Restaurant");
      // setSwitch1(false);
      // setSwitch3(false);
    }else{
      Alert.alert("Restaurant", "Vuelve a activar esta función, ya que hubo un error");
    }

    if (switch3 === true) {
      setValor("Hotel");
      // setSwitch1(false);
      // setSwitch2(false);   
    }
    
    SendData();
  };



  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={"slide"}>
        <View style={modalContainerStyle}>
          <View style={modalStyle}>
            <Text style={titleStyle}>Seleccione la categoría{"\n"}</Text>
            {/*             
            {modalOpcions.map((option, index) => {
              return (
                <View style={optionContainer} key={index}>
                  <Text style={optionTextStyle}>{option.title}</Text>
                  {/* <Switch
                      //   value={option.value}
                      //   onValueChange={option.setSwitch}
                      value={option.value}
                      onValueChange={option.setSwitch}
                       /> 

                  {/* <ToggleSwitch
                    isOn={option.value}
                    onColor="#A0BC32"
                    offColor="gray"
                 //   label={modalOpcions.title}
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="medium"
                    onToggle={enableSwitch}
                  />
                </View> 
              );
            })}

          */}

            <View style={optionContainer}>
              <Text style={optionTextStyle}>{"🧘🏻 Yoga"}</Text>
              <ToggleSwitch
                isOn={switch1}
                onColor="#A0BC32"
                offColor="gray"
                size="medium"
                onToggle={() => {
                  setSwitch1(!switch1)
                  enableSwitch();
                }}
              />
            </View>

            <View style={optionContainer}>
              <Text style={optionTextStyle}>{"🍽️ Restaurant"}</Text>
              <ToggleSwitch
                isOn={switch2}
                onColor="#A0BC32"
                offColor="gray"
                size="medium"
                onToggle={() => {
                  setSwitch2(!switch2)
                  enableSwitch();
                }}
              />
            </View>

            <View style={optionContainer}>
              <Text style={optionTextStyle}>{"🏨 Hotel"}</Text>
              <ToggleSwitch
                isOn={switch3}
                onColor="#A0BC32"
                offColor="gray"
                size="medium"
                onToggle={() => {
                  setSwitch3(!(switch3))
                  enableSwitch();
                }}
              />
            </View>


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
