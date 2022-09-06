import React from "react"
import { View, ActivityIndicator, Text, StyleSheet } from "react-native"
import { Overlay } from "react-native-elements"

export default function Loading(props) {
    const { isVisible, text } = props
    return (
        <Overlay
            isVisible={isVisible}
            windowsBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
        >
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#A0BC32" />
                {text && <Text style={styles.text}>{text}</Text>}

            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: "#FFF",
        borderColor: "#A0BC32",
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#A0BC32",
        textTransform: "uppercase",
        marginTop: 10,
        textAlign: "center"
    }

})