import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import GlobalFont from "../globalFont";

var categories = ["Sports", "Entertainment", "Cinema", "Technology"];

export default class Categories extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(cat) => <CategoryItem>{cat.item}</CategoryItem>}
        ></FlatList>
      </View>
    );
  }
}

class CategoryItem extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <GlobalFont style={{ color: "white", fontWeight: "600" }}>
          {this.props.children}
        </GlobalFont>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "black",
    padding: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
});
