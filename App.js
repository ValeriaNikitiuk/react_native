import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterStack } from "./Screens/RouterStack";

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./Screens/img/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./Screens/img/Roboto-Regular.ttf"),
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
    <Provider store={store}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        onLayout={onLayoutRootView}
      >
        <View style={styles.container}>
          <NavigationContainer>
            <RouterStack />
          </NavigationContainer>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",
  },
});

export default App;
