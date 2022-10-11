import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const Menu = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => navigation.navigate('Course')}>
                <Text style={styles.navTxt}>
                    <Icon name="supervised-user-circle" size={35} />
                </Text>
                <Text style={styles.navTxt}>
                    Courses
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => navigation.navigate('Student')}>
                <Text style={styles.navTxt}>
                    <Icon name="supervised-user-circle" size={35} />
                </Text>
                <Text style={styles.navTxt}>
                    Students
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => navigation.navigate('About')}>
                <Text style={styles.navTxt}>
                    <Icon name="supervised-user-circle" size={35} />
                </Text>
                <Text style={styles.navTxt}>
                    About
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => navigation.navigate('Contact')}>
                <Text style={styles.navTxt}>
                    <Icon name="supervised-user-circle" size={35} />
                </Text>
                <Text style={styles.navTxt}>
                    Contact
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        textTransform: "uppercase",
    },
    navTxt: {
        fontSize: 14,
    },

    btnStyle: {
        justifyContent: "center",
        alignItems: "center",
    },

});
export default Menu;