import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "@/components/ui/pressable";
import { Link, useRouter } from "expo-router";
import AuthLayoutWrapper from "@/components/authlayout/AuthLayoutWrapper";
import { VStack } from "@/components/ui/vstack";

const SignIn = () => {
  const router = useRouter();
  return (
    <AuthLayoutWrapper name={"Sign up"}>
      <Link href="/signin">
        <VStack space="md" className="items-center">
          <Text>Don't have an account? </Text>
          <Text>Sign up</Text>
        </VStack>
      </Link>
      <Link href="/signin">
        <VStack space="md" className="items-center">
          <Text>Don't have an account? </Text>
          <Text>Sign up</Text>
        </VStack>
      </Link>
      <Link href="/signin">
        <VStack space="md" className="items-center">
          <Text>Don't have an account? </Text>
          <Text>Sign up</Text>
        </VStack>
      </Link>
      <Link href="/signin">
        <VStack space="md" className="items-center">
          <Text>Don't have an account? </Text>
          <Text>Sign up</Text>
        </VStack>
      </Link>
      <Link href="/signin">
        <VStack space="md" className="items-center">
          <Text>Don't have an account? </Text>
          <Text>Sign up</Text>
        </VStack>
      </Link>
      <Link href="/signin">
        <VStack space="md" className="items-center">
          <Text>Don't have an account? </Text>
          <Text>Sign up</Text>
        </VStack>
      </Link>
    </AuthLayoutWrapper>
  );
};

export default SignIn;
