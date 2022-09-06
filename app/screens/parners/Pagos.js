import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState, Component } from "react";
import { WebView } from "react-native-webview";

export default function SusPagos(tipoPago, tipo) {
  const [pagos, setPagos] = useState('https://buy.stripe.com/test_bIY4j53jddQd9BCbII');
  console.log(tipoPago);

  const urlMensualIn = "https://buy.stripe.com/test_dR6dTF2f96nLdRSdQR";
  const urlAnualIn = "https://buy.stripe.com/test_bIY4j53jddQd9BCbII";
  const urlMensualFa = "https://buy.stripe.com/test_3csbLx6vpfYl7tubIK";
  const urlAnualFa = "https://buy.stripe.com/test_bIY4j53jddQd9BCbII";

useEffect(() => {
Metodo()
},[])

  const Metodo = () => {
    console.log("hola"+tipo);
    console.log("Mundo"+tipoPago);
    if (tipo === "Individual") {
      if (tipoPago === "Mensual") {
        setPagos(urlMensualIn);
        const revision =
          "https://dashboard.stripe.com/payment-links/plink_1LV48cHdQdShCuDcMBQbcgfe";
        console.log(revision);
        
      }
      if (tipoPago === "Anual") {
        setPagos(urlAnualIn);
      }
    }
    if (tipo === "Familiar") {
      if (tipoPago === "Mensual") {
        setPagos(urlMensualFa);
        const revision =
          "https://dashboard.stripe.com/payment-links/plink_1LV4GsHdQdShCuDcKRWkRdc9";
      }
      if (tipoPago === "Anual") {
        setPagos(urlAnualFa);
      }
    }
    if (tipo === "Matrimonial") {
      if (tipoPago === "Mensual") {
        setPagos(urlMensualIn);
        const revision =
          "https://dashboard.stripe.com/payment-links/plink_1LV48cHdQdShCuDcMBQbcgfe";
        console.log(revision);
        console.log(suscripcion);
      }
      if (tipoPago === "Anual") {
        setPagos(urlAnualIn);
      }
    }

    console.log(pagos);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: pagos,
        }}
        style={{ marginTop: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
