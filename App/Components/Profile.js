import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Images, Profiles } from "../Themes";
import { EventType } from "expo/build/Updates/Updates";
import { Asset } from "expo-asset";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "10%",
    borderColor:"#C5C5C5",
    backgroundColor: "white",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15

  },
  image: {
    width: "100%",
    flex: 7,
  },
  text: {
    width: "100%",
    height: "10%",
    flex: 1,
    padding: 10
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  age: {
    fontSize: 24,
  },
  occupation : {
    fontSize: 16,
  },
});

class Profile extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={this.props.profile.image}
        />
        <View style={styles.text}>
          <Text style={styles.age}>
            {this.props.profile.name},{this.props.profile.age}
          </Text>
          <Text style={styles.occupation}>
            {this.props.profile.occupation}
          </Text>
        </View>
      </View>
    );
  }
}

export default Profile;
