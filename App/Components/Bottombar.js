import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Images, Profiles } from "../Themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20
  },
  smallButton: {
    flex: 1,
    height: 50,
    width: 50,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    margin:10
  },
  bigButton: {
    flex: 1,
    height: 60,
    width: 60,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    margin:10
  },
  rewind: {
    flex: 1,
    width: "40%",
    height: "40%"
  },
  nope: {
    flex: 1,
    width: "50%",
    height: "50%"
  },
  boost: {
    flex: 1,
    width: "40%",
    height: "40%"
  },
  like: {
    flex: 1,
    width: "50%",
    height: "50%"
  },
  superLike: {
    flex: 1,
    width: "40%",
    height: "40%"
  }
});

class Bottombar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.smallButton}>
          <Image
            style={styles.rewind}
            resizeMode="contain"
            source={Images.rewind}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bigButton}>
          <Image
            style={styles.nope}
            resizeMode="contain"
            source={Images.nope}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButton}>
          <Image
            style={styles.boost}
            resizeMode="contain"
            source={Images.boost}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bigButton}>
          <Image
            style={styles.like}
            resizeMode="contain"
            source={Images.like}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButton}>
          <Image
            style={styles.superLike}
            resizeMode="contain"
            source={Images.superLike}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Bottombar;
