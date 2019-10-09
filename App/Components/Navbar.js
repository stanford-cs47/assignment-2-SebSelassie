import React from "react";
import { StyleSheet, Text, View, Image,Platform } from "react-native";
import { Images, Profiles } from "../Themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    height: Platform.OS === 'ios' ? 44 : 56,
  },
  settings: {
    width: "30%",
    height:"30%",
    flex: 1,
    tintColor:"#C5C5C5"

  },
  logo: {
    width: "40%",
    height:"40%",
    flex: 4,

  },
  chat: {
    width: "30%",
    height:"30%",
    flex: 1,
    tintColor:"#C5C5C5"

  }
});

class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.settings}
          resizeMode="contain"
          source={Images.settings}
        />

        <Image
          style={styles.logo}
          resizeMode="contain"
          source={Images.logo}     
        />

        <Image
          style={styles.chat}
          resizeMode="contain"
          source={Images.chat}
        />
      </View>
    );
  }
}

export default Navbar;
