import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import UserData from "./src/screens/UserData";
import Course from "./src/screens/Course";
const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        {/* home screen */}
        <Stack.Screen name="Home" options={{
          headerShown: false,
        }}>
          {(props) => <Home {...props} channelName={"Muzammil Ashfaque"} />}
        </Stack.Screen>

        {/* Course screen */}
        <Stack.Screen name="Course" component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />

        {/* UserData screen */}
        <Stack.Screen name="Student" component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Students",
            headerTitleAlign: "center",
          }}
        />

        {/* About screen */}
        <Stack.Screen name="About" component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />


        {/* Contact screen */}
        <Stack.Screen name="Contact" component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;