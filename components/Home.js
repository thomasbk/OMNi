import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import OriginView from "./OriginView";
import { render } from "react-dom";

function Home(props) {

  var state = {
    isHidden: false,
  };

  const { navigation } = props
  return (
    <View style={styles.container}>
      <OriginView style={styles.originView}></OriginView>
      <Text style={styles.enviarA}>Enviar a</Text>
      <View hide = {state.isHidden}>
      <Image
        source={require("../assets/images/personIcon.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image> 
      <Text style={styles.permissionLabel}>
        OMNiMoni necesita permiso {"\n"}para acceder a tus contactos
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Confirmation")}
        style={styles.button}
      >
      <View style={styles.rect}>
        <Text style={styles.darPermisos}>Dar permisos</Text>
      </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(230,230,230,1)",
    backgroundColor: "rgba(255,255,255,1)"
  },
  originView: {
    height: 74,
    width: 300,
    marginTop: 50,
    alignSelf: "center"
  },
  button: {
    width: 257,
    height: 45,
    marginTop: 40,
    marginLeft: 58
  },
  rect: {
    width: 257,
    height: 45,
    backgroundColor: "rgba(25,83,159,1)",
    borderRadius: 100,
    alignSelf: "center"
  },
  darPermisos: {
    //fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 10,
    alignSelf: "center"
  },
  enviarA: {
    //fontFamily: "roboto-700",
    fontWeight: "bold",
    color: "#121212",
    marginTop: 20,
    marginLeft: 34
  },
  image2: {
    width: 178,
    height: 120,
    marginTop: 40,
    alignSelf: "center"
  },
  permissionLabel: {
    //fontFamily: "roboto-500",,
    fontWeight: "500",
    color: "#121212",
    fontSize: 18,
    textAlign: "center",
    marginTop: 15,
    alignSelf: "center"
  }
});

export default Home;
