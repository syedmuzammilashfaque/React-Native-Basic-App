import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Courses from "../api/course";


const Course = ({ navigation }) => {

    const CourseCard = ({ item }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>
                    <View>
                        <Image style={styles.courseImg}
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>

                    <Text style={styles.courseTitle}>
                        {item.title}
                    </Text>
                    <Text style={styles.courseDescription}>
                        {item.description}
                    </Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btnStyle}
                            onPress={() => navigation.navigate("CourseDetails")}>
                            <Text style={styles.btnTxt}>Course Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={Courses}
            renderItem={CourseCard}
        />

    )
}
const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20,
    },
    courseContainer: {
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 8,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
    },
    courseImg: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    courseTitle: {
        fontSize: 22,
        color: "#344055",
        textAlign: "center",
        textTransform: "uppercase",
        paddingBottom: 15,
        paddingTop: 20,

    },
    courseDescription: {
        textAlign: "left",
        paddingBottom: 15,
        lineHeight: 20,
        fontSize: 16,
        color: "#7d7d7d",
    },
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    btnStyle: {
        backgroundColor: "#809fff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    btnTxt: {
        textTransform: "capitalize",
        color: "#eee",
        fontSize: 20,
    },
});

export default Course;
