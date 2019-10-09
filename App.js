import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { Images, Profiles } from "./App/Themes";
import { Navbar, Profile, Bottombar } from "./App/Components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f6f6f6"
  },

  navbarContainer: {
    flex: 1
  },
  profileContainer: {
    flex: 5,
  },
  bottombarContainer: {
    flex: 2,
  }
});

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      // profileImage: haroldProfile.image,
      // name: haroldProfile.name,
      // age: haroldProfile.age,
      // occupation: haroldProfile.occupation,
      profile: Profiles.harold
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navbarContainer}>
          <Navbar />
        </View>

        <View style={styles.profileContainer}>
          <Profile profile= {this.state.profile} />
        </View>
        <View style={styles.bottombarContainer}>
          <Bottombar />
        </View>
      </SafeAreaView>
    );
  }
}
