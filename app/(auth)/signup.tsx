import AuthLayoutWrapper from "@/components/authlayout/AuthLayoutWrapper";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignUp() {
  return (
    <AuthLayoutWrapper name={"Sign up"}>
      <Link href="/signin">
        <VStack space="md" className="items-center">
          <Text>Already have an account? </Text>
          <Text>Sign in</Text>
        </VStack>
      </Link>
    </AuthLayoutWrapper>
  );
}
