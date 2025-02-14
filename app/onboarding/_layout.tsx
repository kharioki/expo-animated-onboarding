import { Stack } from "expo-router";
import React from "react";

const OPTION_CONFIG = {
  option: {
    presentation: "transparentModal",
  },
};

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="step-1" {...OPTION_CONFIG} />
      <Stack.Screen name="step-2" {...OPTION_CONFIG} />
    </Stack>
  );
}
