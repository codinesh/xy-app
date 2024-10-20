import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "@/components/ui/pressable";
import { Link, useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Sign In Page</Text>
      <Link href="/signup">
        <Text>Don't have an account? Sign up</Text>
      </Link>
    </View>
  );
};

export default SignIn;
