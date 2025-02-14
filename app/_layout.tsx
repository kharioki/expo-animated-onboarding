import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    const setNavBar = async () => {
      try {
        // ensures splash screen is visible during setup
        await SplashScreen.preventAutoHideAsync();
        // enables edge-to-edge mode
        await NavigationBar.setPositionAsync("absolute");
        // transparent backgrounds to see through
        await NavigationBar.setBackgroundColorAsync("#ffffff00");
      } catch (e) {
        console.warn("Error setting navigation bar:", e);
      } finally {
        // hide splash screen once setup is complete
        await SplashScreen.hideAsync();
      }
    };
    setNavBar();
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
