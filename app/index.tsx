import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Edit app/index.tsx to edit this screen. trung</Text>
      <TextInput placeholder="your email" style={{}}></TextInput>
      <TouchableOpacity>
        <Text>Clike me</Text>
      </TouchableOpacity>
      <Link href={"/about"}>Visit about me</Link >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "blue", fontSize: 40 },
})

