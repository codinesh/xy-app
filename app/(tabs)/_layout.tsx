import { Icon } from "@/components/ui/icon";
import { Tabs } from "expo-router";
import { House, User } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (prop) => (
            <Icon className="text-typography-500" as={House} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: (prop) => (
            <Icon className="text-typography-500" as={User} />
          ),
        }}
      />
    </Tabs>
  );
}
