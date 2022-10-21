import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Alert
  } from "react-native";
  import React, { useEffect, useState, Component } from "react";
  import { WebView } from "react-native-webview";
  import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
  import { Button } from "react-native-elements";
  import { collection, onSnapshot, orderBy, query, QuerySnapshot, where } from "firebase/firestore"
  import { db } from '../../utils/firebase';
  import PagosDataService from "../../services/pagos.service"
  
  export default function CardPay({
    id,
    email,
    file,
    apelativo,
    importe,
    mesAdeudo,
    noMembresia,
    tipo,
    tipoPago,
    titular,
    telCelular,
    statusSuscribe,
    montoTP,
  }

    ) {
    const [pagos, setPagos] = useState(
      "https://buy.stripe.com/test_dR6dTF2f96nLdRSdQR"
    );
    const [pagoExitoso, setPagoExitoso] = useState("");
    const [montoP, setMontoP] = useState(3888);
    const [cuota, setCuota ] = useState([]);
  
    const urlMensualIn = "https://buy.stripe.com/test_dR6dTF2f96nLdRSdQR";
    const urlAnualIn = "https://buy.stripe.com/test_bIY4j53jddQd9BCbII";
    const urlMensualFa = "https://buy.stripe.com/test_3csbLx6vpfYl7tubIK";
    const urlAnualFa = "https://buy.stripe.com/test_bIY4j53jddQd9BCbII";
  
    useEffect(() =>{
      const refCollections = collection(db, 'cuotas');
      const q = query(refCollections);
  
      const unsubscribe = onSnapshot(q, querySnapshot => {
        setCuota(
         querySnapshot.docs.map(doc => ({
           id: doc.id,
           Familiar: doc.data().Familiar,
           Individual: doc.data().Individual,
         }))
        ) 
       })
   return unsubscribe;
     }, [])

    //ADD localhost address of your server
    const API_URL = "http://192.168.3.14:3000";
    // const API_URL = "http://192.168.0.5:3000";

  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const PagoExitoso = async () => {
    console.log("Llegó aquí");
    setPagoExitoso("Success");
    console.log(montoTP);
          console.log("Paso por aquí");
          let result
          if (montoTP) {
            result = (montoTP + montoP);
            console.log(result);
          } else {
            result = (0 + montoP);
            console.log(result);
          }
          

          const newUpPago = {
            statusSuscribe: "Success",
            montoTP: result,
            ultimoPa:new Date(),          
          };
          console.log(newUpPago);


          if (id !== undefined && id !== "") {
            await PagosDataService.updatePago(id, newUpPago);
            // setPromotionId("");
            // setMessage({ error: false, msg: "Actualización exitosa!" });
            console.log("Actualización exitosa!");
          } else {
            await PagosDataService.addPago(newUpPago);
            // setMessage({ error: false, msg: "Nueva promoción añadida!" });
            console.log("Añadición exitosa!");
          }
  }

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
    const billingDetails = {
      email: email,
      name: titular,
      phone: telCelular,
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("No se puede procesar el pago");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
          paymentMethodType: 'Card',
          amount_capturable: 1,
        });
        if (error) {
          alert(`Error de confirmación de pago ${error.message}`);
          console.log(error);
          setPagoExitoso("Declinated");
        } else if (paymentIntent) {
          alert("Pago exitoso");
          console.log("Pago exitoso ", paymentIntent);
          // Hacer la descarga de lo que lleve pagado y hacer función para actualizar el valor
          // POdemos hacer el redirect en lugar de del mensaje exitoso
          PagoExitoso();
          
        }
      }
    } catch (e) {
      console.log(e);
    }
    //3.Confirm the payment with the card details
  };

  
    return (
      <View style={styles.container}>
      {/* <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.inputEmail}
      /> */}
      <Text style={styles.titulos}>
      Page su membresía no° {noMembresia} de {apelativo} {titular}
      </Text> 
      <Text style={styles.titulos}>
        De tipo {tipo} {tipoPago}
      </Text>
      <CardField
        postalCodeEnabled={false}
        placeholder={{ number: "4242 4242 4242 4242" }}
        cardStyle={styles.cardStyle}
        style={styles.cardConatainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button
        onPress={handlePayPress}
        buttonStyle={styles.buttonStyle}
        title="Pagar"
        disabled={loading}
        backgroundColor={"#fff"}
        // type="outline"
      />
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "transparent",
      justifyContent: "center",
      margin: 20,
    },
    inputEmail: {
      backgroundColor: "#efefefef",
      borderColor: "#000000",
      borderRadius: 8,
      fontSize: 20,
      height: 50,
      padding: 10,
    },
    cardStyle: {
      backgroundColor: "#efefefef",
    },
    cardConatainer: {
      height: 50,
      marginVertical: 90,
    },
    buttonStyle: {
      color: "gray",
      backgroundColor: "#A0BC32",
      borderRadius: 60,
      textDecorationColor: "gray",
    },
    titulos:{
      textAlign: "center",
      fontSize: 17,
      fontWeight: "bold",
      margin: 6,
      color: "gray",
    },
  });
  