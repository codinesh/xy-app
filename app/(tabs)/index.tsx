import { Box } from "@/components/ui/box";
import { Link } from "expo-router";
import { Image, StyleSheet, Platform, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <Box>
      <Text>Index</Text>
      <Link href="/settings">
        <Text>Settings</Text>
      </Link>
      <Link href="/signin">
        <Text>signin</Text>
      </Link>
      <Link href="/signup">
        <Text>signup</Text>
      </Link>
    </Box>
  );
}
