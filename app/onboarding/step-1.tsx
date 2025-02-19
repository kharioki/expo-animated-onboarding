import { ThemedText } from "@/components/ThemedText";
import { OnBoardingLayout } from "@/components/ui/OnBoardingLayout";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Image } from "expo-image";
import { View } from "react-native";
import { generalStyles } from "@/styles";

export default function OnboardingStepOne() {
  const primary1 = useThemeColor({}, "primary1");
  const primary3 = useThemeColor({}, "primary3");
  return (
    <OnBoardingLayout bgColor={primary3} nextBgColor={primary1} nextHref="/onboarding/step-2">
      <View style={generalStyles.container}>
        <Image
          source={require("../../assets/images/react-logo3x.png")}
          contentFit="contain"
          style={generalStyles.image}
        />
        <View style={generalStyles.textContainer}>
          <ThemedText style={[generalStyles.text, generalStyles.title]}>
            Expo Animated Onboarding
          </ThemedText>
        </View>
      </View>
    </OnBoardingLayout>
  );
}
