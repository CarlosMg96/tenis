import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native';
import React, {useEffect, useState, Component} from 'react';
import { WebView } from 'react-native-webview';

export default function Know() {
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
