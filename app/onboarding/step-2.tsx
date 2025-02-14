import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function OnboardingStepOne() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Step 2</Text>
        <Text style={styles.description}>
          Start your journey with our amazing app
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: "center",
  },
  image: {
    width: width * 0.8,
    height: height * 0.3,
  },
  textContainer: {
    flex: 0.4,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    lineHeight: 24,
  },
});
