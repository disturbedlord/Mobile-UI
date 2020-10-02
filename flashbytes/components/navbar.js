import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text>Navbar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
  },
});
