import { OnBoardingLayout } from "@/components/ui/OnBoardingLayout";
import { useThemeColor } from "@/hooks/useThemeColor";
import { generalStyles } from "@/styles";
import React from "react";
import { View, Text, Dimensions } from "react-native";

export default function OnboardingStepTwo() {
  const primary1 = useThemeColor({}, "primary1");
  const primary2 = useThemeColor({}, "primary2");
  const primary4 = useThemeColor({}, "primary4");

  return (
    <OnBoardingLayout
      nextBgColor={primary4}
      bgColor={primary1}
      nextHref="/onboarding/step-3"
    >
      <View style={generalStyles.container}>
        <View style={generalStyles.textContainer}>
          <Text style={[generalStyles.text, generalStyles.titleBold, { color: primary2 }]}>
            Expo Router Navigation
          </Text>
          <Text style={[generalStyles.text, generalStyles.description, { color: primary2 }]}>
            Handles screen transitions smoothly in the onboarding flow.
          </Text>
        </View>
      </View>
    </OnBoardingLayout>
  );
}
