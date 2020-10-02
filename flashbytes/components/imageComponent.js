import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GlobalFont from "../globalFont";

export default class ImageComponent extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{
            flex: 1,
            alignSelf: "stretch",
            height: 500,
            resizeMode: "cover",
            borderRadius: 10,
            marginTop: 15,
          }}
          source={{
            uri:
              "https://cricketaddictor.com/wp-content/uploads/2019/04/Virat-Kohli-6.jpg",
          }}
        ></Image>
        <View style={styles.test}>
          <GlobalFont style={styles.textOnImage}>
            IPL 2020: Virat Kohli goes ballistic in net, admits 'shoulders are
            sore'
          </GlobalFont>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    position: "absolute",
    bottom: 20,
    padding: 5,
  },
  textOnImage: {
    color: "white",
    fontWeight: "600",
    fontSize: 22,
  },
});
