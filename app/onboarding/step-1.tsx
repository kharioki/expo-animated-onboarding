import { ThemedText } from "@/components/ThemedText";
import { OnBoardingLayout } from "@/components/ui/OnBoardingLayout";
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function OnboardingStepOne() {
  return (
    <OnBoardingLayout>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Welcome</ThemedText>
          <ThemedText style={styles.description}>
            Start your journey with our amazing app
          </ThemedText>
        </View>
      </View>
    </OnBoardingLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
});
