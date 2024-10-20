import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignUp() {
  return (
    <View>
      <Text>Sign Up Page</Text>

      <Link href="/signin">
        <Text>Already have an account? Sign in</Text>
      </Link>
    </View>
  );
}
