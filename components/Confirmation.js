import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import OriginView from "./OriginView.js";

function Confirmation(props) {
  return (
    <View style={styles.container}>
      <OriginView style={styles.originView}></OriginView>
      <View style={styles.rect2}>
        <View style={styles.group}>
          <Text style={styles.contactoDestino}>Contacto destino</Text>
          <View style={styles.imageRow}>
            <Image
              source={require("../assets/images/personIconSmall.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.carlos}>Carlos</Text>
          </View>
        </View>
      </View>
      <Text style={styles.cuantoLabel}>¿Cuanto dinero querés enviar?</Text>
      <TextInput
        placeholder="Monto"
        keyboardType="decimal-pad"
        style={styles.placeholder}
      ></TextInput>
      <Text style={styles.montoDisponible}>Monto disponible:</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Picture")} style={styles.button}>
          <Text style={styles.siguiente}>Siguiente</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  originView: {
    width: 257,
    height: 74,
    marginTop: 40,
    marginLeft: 59
  },
  rect2: {
    width: 300,
    height: 87,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(227,227,227,1)",
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center"
  },
  group: {
    width: 106,
    height: 46,
    marginTop: 21,
    marginLeft: 14
  },
  contactoDestino: {
    //fontFamily: "roboto-regular",
    width: 200,
    color: "#121212"
  },
  image: {
    width: 20,
    height: 18
  },
  carlos: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 13,
    marginTop: 1
  },
  imageRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 12,
    marginRight: 33
  },
  cuantoLabel: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 35,
    marginLeft: 60
  },
  placeholder: {
    //fontFamily: "roboto-regular",
    color: "rgba(25,83,159,1)",
    height: 45,
    width: 168,
    fontSize: 24,
    marginTop: 32,
    marginLeft: 103
  },
  montoDisponible: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7,
    marginLeft: 103
  },
  button: {
    width: 256,
    height: 45,
    backgroundColor: "rgba(25,83,159,1)",
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 40
  },
  siguiente: {
    //fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 10,
    marginLeft: 81
  }
});

export default Confirmation;
