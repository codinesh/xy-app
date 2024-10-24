import { Box } from "@/components/ui/box";
import { Link } from "expo-router";
import { Image, StyleSheet, Platform, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "transparent" }}>
      <Box className="items-center mx-auto mt-5 h-full w-full">
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
    </SafeAreaView>
  );
}
