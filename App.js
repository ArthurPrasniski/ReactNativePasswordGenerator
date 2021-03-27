import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Clipboard from 'expo-clipboard';


let charset =
  "abcdefgahijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@#$&";

export default function app() {
  const [password, setPassword] = useState("");
  const [sizePassword, setSizePassword] = useState(5);

  function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sizePassword; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  }

  function copyPassword(){
    Clipboard.setString(password)
    alert('Senha copiada com sucesso')
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>{sizePassword} caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          maximumTrackTintColor="#02a3f8"
          minimumTrackTintColor="#28f29c"
          value={sizePassword}
          onValueChange={(valor) => setSizePassword(valor.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.textButton}>Gerar Senha</Text>
      </TouchableOpacity>

      
      {password !== '' && (
      <View style={styles.area}>
        <Text style={styles.password} onLongPress={copyPassword}>{password}</Text>
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3ff",
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#02a3f8",
    width: "50%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 25,
  },
  textButton: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },

  password: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
  },
});
