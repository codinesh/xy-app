import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

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

  const navigation = useNavigation();
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    console.log("Nav change");
    return () => {};
  }, [navigation.canGoBack()]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
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
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
