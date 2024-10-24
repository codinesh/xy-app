import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Slot, Stack } from "expo-router";
import { Box } from "@/components/ui/box";

const AuthLayout = () => {
  return (
    <Stack
      initialRouteName="signin"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          height: "100%",
        },
      }}
    >
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
    </Stack>
  );
};

export default AuthLayout;
