import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./app/navigation/Navigation";
import { LogBox } from "react-native";
import { app } from "./app/utils/firebase";
import IndexNav from "./app/logged/IndexNav";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App(props) {
  const { navigation } = props;
  const [login, setLogin] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  LogBox.ignoreAllLogs(true);
  return login ? (
    <StripeProvider publishableKey="pk_test_51LDXhHHdQdShCuDc3xQYnPADYSvI6LdhWEXecfTsEkgFJVCp2VvuTrEq2xV7aVPL24NH7DUKUaHOzrxV3ierTEN3003UmxhtBH">
      <IndexNav />
    </StripeProvider>
  ) : (
    <Navigation />
  );
}
