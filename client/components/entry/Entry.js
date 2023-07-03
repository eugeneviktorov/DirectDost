import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../redux/userInfoSlice";

const LoginButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress} activeOpacity={1}>
      <Text style={styles.textbutton}>{text}</Text>
    </TouchableOpacity>
  );
};

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  const [isLoading, setisLoading] = useState(userInfo.loading);
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    if (userInfo.isAuthorize) {
      navigation.navigate("Home");
    }
    if (userInfo.authorizeError) {
      setLoadingText("Ошибка входа");
      setTimeout(() => {
        setisLoading(userInfo.loading);
        setLoadingText("Loading...");
      }, 1000);
    } else {
      setisLoading(userInfo.loading);
    }
  }, [userInfo]);

  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(fetchUserInfo(data));
  };

  return (
    <View style={{ height: "100%" }}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.statusText}>{loadingText}</Text>
        </View>
      )}

      <Text style={styles.header}>Вход в систему</Text>

      <TextInput
        onChangeText={(val) =>
          setData({
            login: val,
            password: data.password,
          })
        }
        style={styles.input}
        placeholder="Введите логин"
        placeholderTextColor="#999"
        selectionColor="rgba(23, 176, 254, 0.5)"
        value={data.login}
      />
      <TextInput
        onChangeText={(val) =>
          setData({
            login: data.login,
            password: val,
          })
        }
        style={styles.input}
        placeholder="Введите пароль"
        placeholderTextColor="#999"
        selectionColor="rgba(23, 176, 254, 0.5)"
        value={data.password}
      />

      <Text
        style={styles.text}
        onPress={() =>
          Alert.alert(
            "Восстановление пароля!",
            "Для восстановления пароля, обратитесь к системному администратору или к куратору вашей группы."
          )
        }
      >
        Забыли пароль?
      </Text>
      <LoginButton text="Войти" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  statusText: {
    // position: "relative",
    // zIndex: 101,
    color: "#fff",
    fontSize: 24,
  },
  loadingContainer: {
    backgroundColor: "#000000d3",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 100,
  },
  header: {
    color: "#17B0FE",
    fontSize: 34,
    marginTop: 80,
    marginBottom: 50,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    color: "#17B0FE",
    fontSize: 20,
    paddingHorizontal: 10,
    borderColor: "#999",
  },
  text: {
    color: "#17B0FE",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
    textAlign: "left",
    textDecorationLine: "underline",
  },
  square: {
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    aspectRatio: 4,
    backgroundColor: "#061D47",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  textbutton: {
    fontSize: 24,
    color: "#ffffff",
  },
});
