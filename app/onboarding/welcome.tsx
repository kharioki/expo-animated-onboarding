import { ThemedText } from "@/components/ThemedText";
import { OnBoardingLayout } from "@/components/ui/OnBoardingLayout";
import { useThemeColor } from "@/hooks/useThemeColor";
import { generalStyles } from "@/styles";
import React from "react";
import { View, Dimensions } from "react-native";

export default function OnboardingStepTwo() {
  const bg = useThemeColor({}, "background");

  return (
    <OnBoardingLayout nextBgColor={bg} bgColor={bg} complete>
      <View style={generalStyles.container}>
        <View style={generalStyles.textContainer}>
          <ThemedText
            style={[
              generalStyles.text,
              generalStyles.titleBold,
              {
                textAlign: "center",
              },
            ]}
          >
            You're In!
          </ThemedText>
          <ThemedText
            style={[
              generalStyles.text,
              generalStyles.description,
              { textAlign: "center" },
            ]}
          >
            Everything's ready. Start building with React Native now.
          </ThemedText>
        </View>
      </View>
    </OnBoardingLayout>
  );
}
