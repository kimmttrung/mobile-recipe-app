import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
        <StatusBar style="dark"></StatusBar>
      </SafeAreaView>
    </ClerkProvider>

  )
}
