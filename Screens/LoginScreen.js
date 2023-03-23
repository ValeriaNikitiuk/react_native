import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
 TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import initialState from "./initialState";

const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsShowKeyboard(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShowKeyboard(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleRegister = () => {
    console.log(state);
    setState(initialState);
  };

  const handleFocus = () => {
    setIsShowKeyboard(true);
    setIsFocused(true);
  };

  return (
    <View style={styles.containerForm}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 32 : 0 }}>
          <Text style={styles.text}>Войти</Text>
          <TextInput
            style={[styles.input, isFocused && { borderColor: "#FF6C00" }]}
            placeholder="Адрес электронной почты"
            onFocus={handleFocus}
            onBlur={() => setIsFocused(false)}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
            value={state.email}
            placeholderTextColor={"#BDBDBD"}
          />
          <TextInput
            style={[styles.input, isFocused && { borderColor: "#FF6C00" }]}
            placeholder="Пароль"
            secureTextEntry={true}
            onFocus={handleFocus}
            onBlur={() => setIsFocused(false)}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, password: value }))
            }
            value={state.password}
            placeholderTextColor={"#BDBDBD"}
          />
        </View>
      </KeyboardAvoidingView>

      {!isShowKeyboard && (
        <View style={styles.registerCont}>
          <TouchableOpacity
            style={styles.btnReg}
            activeOpacity={0.8}
            onPress={handleRegister}
          >
            <Text style={styles.textBtn}>Войти</Text>
          </TouchableOpacity>
          <Text style={styles.textLog}>Нет аккаунта? Зарегестрироваться</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
     borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
   
  },
  form: {
    display: "flex",
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    height: 50,
     backgroundColor: "#F6F6F6",
    color: "#212121",
    borderRadius: 8,
    borderColor: "#E8E8E8",
   
    padding: 16,
    marginBottom: 16,
  },
  text: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 32,
    marginBottom: 32,
  },
  registerCont: {
    marginHorizontal: 16,
    display: "flex",
    marginBottom: 78,
  },
  btnReg: {
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    alignItems: "center",
    marginTop: 27,
    marginBottom: 16,
  },
  textBtn: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
  },
  textLog: {
       textAlign: "center",
    fontWeight: "400",
    color: "#1B4371",
    fontSize: 16,
  },
});

export default LoginScreen;
