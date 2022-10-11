import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Menu from "../components/Menu";
const Home = (props) => {

    const description = "A passionate Full Stack Software Engineer 🚀 having an experience of building Web.";

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image style={styles.mainImg}
                    resizeMode="contain"
                    source={require("../../assets/homeImg.png")} />
                <Text style={styles.mainText}>Welcome to </Text>
                <Text style={[styles.mainText, {
                    fontSize: 25, color: "#4c5dab", marginTop: 0,
                }]}>
                    {props.channelName}
                </Text>
                <Text style={styles.description}>{description}</Text>
            </View>

            <View style={styles.menyStyle}>
                <View style={styles.lineStyle}></View>
                <Menu />
                <View style={[styles.lineStyle,
                { marginVertical: 10, }]}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center",
    },

    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },

    mainImg: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        display: "flex",
        alignItems: "stretch",
        marginTop: 20,
        borderRadius: 20,
    },

    mainText: {
        fontSize: 27,
        color: "#344055",
        marginTop: 20,
        textTransform: "uppercase",
    },

    description: {
        textAlign: "left",
        fontSize: 19,
        color: "#7d7d7d",
        marginTop: 20,
        paddingBottom: 50,
        lineHeight: 26,
    },

    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.3,
        borderColor: "grey",
    },

});

export default Home;