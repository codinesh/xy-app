import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import {
  SafeAreaView,
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const safeArea = useSafeAreaFrame();
  const safeAreaInsets = useSafeAreaInsets();
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  console.log(safeAreaInsets);

  return (
    <GluestackUIProvider
      mode="light"
      style={{
        marginTop: safeAreaInsets.top,
      }}
    >
      <ThemeProvider value={DefaultTheme}>
        <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, statusBarColor: "#434343" }}
          />
          <Stack.Screen
            name="(auth)"
            options={{ headerShown: false, statusBarColor: "#434343" }}
          />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="settings" />
          <Stack.Screen name="signin" />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
