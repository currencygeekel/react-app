import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "0deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 250,
          height: 250,
        }}
        source={{
          uri: "https://i.pinimg.com/originals/27/77/fe/2777fe2bb56cac693982b703dae4f8e4.png",
        }}h
      />
      <Text style={{fontSize: 25, fontWeight: '500', marginBottom: 20}}> Welcome to the Apparels Store! </Text>
      <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 45,
          }}
          placeholder="Enter your username"
        />
      </View>
     <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 45,
          }}
          placeholder="Enter your password"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Text style={{color: "white"}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Text style={{color: "white"}}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}