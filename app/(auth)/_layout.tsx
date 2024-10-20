import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Slot, Stack } from "expo-router";
import { Box } from "@/components/ui/box";

const AuthLayout = () => {
  return (
    <SafeAreaView>
      <View className="w-full">
        <Text>Authentication Layout</Text>
        <Link href="/">
          <Text>Home</Text>
        </Link>

        <Link href="/">
          <Text>Settings</Text>
        </Link>
        <Box className="p-6">
          <Stack
            initialRouteName="signin"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="signin" />
            <Stack.Screen name="signup" />
          </Stack>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default AuthLayout;
