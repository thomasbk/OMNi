import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function OriginView(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.cuentaOrigen}>Cuenta origen</Text>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/walletIcon.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.moni}>Moni</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 300,
    height: 74,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(227,227,227,1)",
    borderRadius: 5,
    alignSelf: "center"
  },
  cuentaOrigen: {
    //fontFamily: "roboto-700",,
    fontWeight: "bold",
    color: "#121212",
    marginTop: 10,
    marginLeft: 12
  },
  image: {
    width: 24,
    height: 20
  },
  moni: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 10,
    marginTop: 2
  },
  imageRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12,
    marginRight: 179
  }
});

export default OriginView;
