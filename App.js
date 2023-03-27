import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

SplashScreen.preventAutoHideAsync();

function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./Screens/img/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./Screens/img/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} onLayout={onLayoutRootView}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./Screens/img/photo-1.jpg")}
        >
          <RegistrationScreen />
          {/* <LoginScreen /> */}

          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
 
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
   container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",
  },
});

export default App;