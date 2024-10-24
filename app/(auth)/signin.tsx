import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import AuthLayoutWrapper from "@/components/authlayout/AuthLayoutWrapper";
import { VStack } from "@/components/ui/vstack";

const SignIn = () => {
  return (
    <AuthLayoutWrapper name={"Sign in"}>
      <Link href="/signin">
        <Text>Don't have an account? </Text>
        <Link href={"/signup"}>
          <Text>Sign up</Text>
        </Link>
      </Link>
      <Link href="/signup">
        <VStack space="md" className="items-center">
          <Text>Don't have an account? f</Text>
          <Text>Sign up</Text>
        </VStack>
      </Link>
      <VStack space="md" className="items-center">
        <Link href="/signup">
          <Text>Don't have an account? 5</Text>
        </Link>
      </VStack>
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
