import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ListView, FlatList } from "react-native";
import AppBar from "./AppBar";
import GlobalFont from "./globalFont";
import ScrollableList from "./components/scrollableList";
import Categories from "./components/categories";
import ImageComponent from "./components/imageComponent";
import Navbar from "./components/navbar";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        <AppBar></AppBar>
        <View style={styles.main}>
          <GlobalFont style={[styles.title]}>Trends</GlobalFont>
          <ScrollableList></ScrollableList>
          <Categories></Categories>
          <ImageComponent></ImageComponent>
          <Navbar></Navbar>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    marginHorizontal: 15,
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  scrollList: {
    overflow: "scroll",
    paddingVertical: 10,
  },
  hotTopics: { fontSize: 18, marginRight: 8, color: "gray" },
  main: {
    justifyContent: "flex-start",
  },
});
