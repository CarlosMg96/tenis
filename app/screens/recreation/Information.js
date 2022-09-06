import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

export default function Hotel() {
  return (

    <SafeAreaView style={{ flex: 1 }}>
    <WebView
     source={{
       uri: 'http://www.villainternacionaldetenis.com/'
     }}
     style={{ marginTop: 1 }}
   />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
