import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import initialState from "./initialState";


const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
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

  return (
    <View style={styles.conteinerForm}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 32 : 0 }}>
          <Text style={styles.textReg}>Регистрация</Text>
          <TextInput
            style={styles.input}
            placeholder="Логин"
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
            value={state.login}
            placeholderTextColor={"#BDBDBD"}
          />
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
            value={state.email}
            placeholderTextColor={"#BDBDBD"}
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
            onFocus={() => setIsShowKeyboard(true)}
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
            <Text style={styles.textBtn}>Зарегестрироваться</Text>
          </TouchableOpacity>
          <Text style={styles.textLog}>Уже есть аккаунт? Войти</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  conteinerForm: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    display: "flex",
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16
  },
  textReg: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 32,
    marginBottom: 32
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
    marginBottom: 16
  },
  textBtn: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
  },
  textLog: {
    color: "#1B4371",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 16,
  },
});

export default RegistrationScreen;