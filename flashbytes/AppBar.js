import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/inter";
import GlobalFont from "./globalFont";

export default class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        <FontAwesome name="align-left" style={styles.icon}></FontAwesome>
        <GlobalFont style={{ fontSize: 25 }}>FlashBytes</GlobalFont>
        <FontAwesome name="search" style={styles.icon}></FontAwesome>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
  },
  icon: {
    fontSize: 20,
  },
});
