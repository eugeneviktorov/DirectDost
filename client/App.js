import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Entry from "./components/entry/Entry";
import Menu from "./components/menu/Menu";
import Subject from "./components/subject/Subject";
import Teacher from "./components/teacher/Teacher";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Sections from "./components/sections/Sections";
import MySections from "./components/sections/MySections";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Entry}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Предметы" component={Subject} />
            <Stack.Screen name="Преподаватели" component={Teacher} />
            <Stack.Screen name="Все секции" component={Sections} />
            <Stack.Screen name="Мои секции" component={MySections} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FA",
  },
});
