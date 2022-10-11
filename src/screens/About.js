import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';


const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Syed Muzammil Ashfaque</Text>
      <Text style={styles.paraStyle}>I am a Full Stack Application Developer </Text>

      <View>
        <Image
          style={styles.imgStyle}
          resizeMode="contain"
          source={require("../../assets/myImg.jpg")}
        />
      </View>

      <View style={styles.aboutLayout} >
        <Text style={styles.aboutSubHeader}>About Me</Text>
        <Text style={styles.aboutDescription}>
          A passionate Full Stack Software Engineer 🚀 having an experience of building Web applications with JavaScript / ReactJs / NodeJs / MongoDB / Express.Js and some other cool libraries and frameworks.
        </Text>
      </View>


      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => Linking.openURL("https://syed-muz.web.app/")}
        >
          <Text style={styles.iconStyle}>You</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => Linking.openURL("https://syed-muz.web.app/")}
        >
          <Text style={styles.iconStyle}>You</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => Linking.openURL("https://syed-muz.web.app/")}
        >
          <Text style={styles.iconStyle}>You</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },
  imgStyle: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#fff",
  },

  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
    lineHeight: 30,
  },

  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30,
  },


  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },

  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    lineHeight: 30,
    alignSelf: "center",
  },

  aboutDescription: {
    paddingBottom: 20,
    color: "#fff",
  },

  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },

});
export default About;