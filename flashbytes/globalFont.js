import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

export default class GlobalFont extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsLoaded: false,
    };
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        font1: require("./assets/fonts/rubik.ttf"),
      });

      this.setState({ fontsLoaded: true });
      // alert("fonts are loaded");
      console.log("loaded");
    } catch (error) {
      // alert(error);
    }
  }

  render() {
    return this.state.fontsLoaded ? (
      <Text style={[this.props.style, styles.font]}>{this.props.children}</Text>
    ) : (
      <View>
        <Text>Loading Assets...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "font1",
  },
});
