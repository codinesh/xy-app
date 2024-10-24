import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { Box } from "../ui/box";
import { Center } from "../ui/center";
import { VStack } from "../ui/vstack";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayoutWrapper = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <VStack
        className="flex-1 items-center p-4"
        style={{}} // Adjust for safe area on top
      >
        {/* Header section */}
        <View className="w-full items-center mb-6">
          <Text className="text-xl font-bold">Welcome to xy-app</Text>
          <Text className="text-lg font-semibold">{name}</Text>
        </View>

        {/* Children centered vertically */}
        <View className="flex-1 justify-center items-center w-full">
          <Box className="p-4">{children}</Box>
        </View>
      </VStack>
    </SafeAreaView>
  );
};

export default AuthLayoutWrapper;
