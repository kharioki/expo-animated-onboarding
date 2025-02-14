import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { View, StyleSheet, Dimensions, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface OnBoardingLayoutProps {
  children: React.ReactNode;
  bgColor?: string;
  nextBgColor?: string;
  nextTextColor?: string;
  nextText?: string;
}

export const OnBoardingLayout: React.FC<OnBoardingLayoutProps> = ({
  children,
  nextBgColor,
  bgColor,
  nextTextColor,
  nextText = "NEXT",
}) => {
  const bg = useThemeColor({}, "background");
  const text = useThemeColor({}, "text");
  const backgroundColor = bgColor ? bgColor : bg;
  const nexBgColor = nextBgColor ? nextBgColor : text;
  const nextColor = nextTextColor ? nextTextColor : bg;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
    >
      <View style={styles.content}>{children}</View>
      <Pressable style={[styles.next, { backgroundColor: nexBgColor }]}>
        <Text style={[styles.nextText, { color: nextColor }]}>{nextText}</Text>
        <Ionicons
          name="arrow-forward"
          color={nextColor}
          size={27}
          style={{ paddingTop: 2 }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  next: {
    position: "absolute",
    bottom: -25,
    right: -50,
    width: 240,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    gap: 8,
    borderRadius: "50%",
    paddingBottom: 10,
    paddingRight: 10,
  },
  nextText: {
    fontSize: 27,
    fontWeight: "500",
  },
});
