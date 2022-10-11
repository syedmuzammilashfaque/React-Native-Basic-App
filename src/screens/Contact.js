import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Contact = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submitForm = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Plzz fill all the fields")
    }
    else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headeing}>Level up your knowledge</Text>
      <Text style={styles.description}>you can reach us anytime via syedmuzammilashfaque@gmail.com</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your Name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Muzammil Ashfaque"}
          value={name}
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your Email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"demo@muzammil.com"}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your Mobile Number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"12345678"}
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>How can I help you ? </Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={"Tell us about your self"}
          numberOfLines={5}
          multiline={true}
          value={message}
          onChangeText={(message) => setMessage(message)}
        />
      </View>


      {/* checkbox */}


      <View style={styles.checkBox}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.checkBoxText}>
          I have read and agreed with the TC
        </Text>
      </View>


      {/* submit button */}
      <TouchableOpacity
        style={styles.submitBtn}
        disabled={!agree}
        onPress={submitForm}>
        <Text style={styles.btnText}>Contact Us</Text>

      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({

  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },

  headeing: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 10,
    textTransform: "capitalize",
  },

  description: {
    fontSize: 17,
    color: "#7d7d7d",
    paddingTop: 5,
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#7d7d7d",
    paddingBottom: 5,
    lineHeight: 25,
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 4,
  },

  multilineStyle: {
    paddingVertical: 4,
  },

  checkBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },

  checkBoxText: {
    marginTop: 5,
    marginLeft: 10,
    color: "#7d7d7d",
  },

  submitBtn: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    backgroundColor: "#7d7d7d",
  },

  btnText: {
    color: "#eee",
  },


});

export default Contact;