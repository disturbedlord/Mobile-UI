import React from "react";
import { Text, FlatList } from "react-native";
var trendsArray = [
  "# COVID19",
  "# IPL2020",
  "# CORONA",
  "# NEET",
  "# GLOBAL CRISIS",
];
export default class ScrollableList extends React.Component {
  state = {};

  render() {
    return (
      <FlatList
        horizontal={true}
        data={trendsArray}
        showsHorizontalScrollIndicator={false}
        renderItem={(trends) => {
          console.log(trends);
          return (
            <Text
              style={{ marginRight: 12, marginTop: 15, color: "gray" }}
              key={trends}
            >
              {trends.item}
            </Text>
          );
        }}
      ></FlatList>
    );
  }
}
