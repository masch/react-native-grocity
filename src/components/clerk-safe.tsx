import React from 'react'
import { Text, View } from 'react-native'
import Constants from 'expo-constants'

// Native version (Android/iOS).
// Because of clerk-safe.web.tsx, Metro Web will NEVER load this file.
// This allows us to safely require @clerk/expo/native without crashing the browser.

const isExpoGo = Constants.appOwnership === 'expo'

let UserButton: React.ComponentType<any> = () => (
    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 10 }}>User</Text>
    </View>
)

let UserProfileView: React.ComponentType<any> = () => (
    <View style={{ padding: 20, backgroundColor: '#f9f9f9', borderRadius: 12, marginVertical: 10 }}>
        <Text style={{ fontStyle: 'italic', color: '#666', textAlign: 'center' }}>
            Clerk Native profile is only available in &apos;Development Builds&apos;.
        </Text>
    </View>
)

let AuthView: React.ComponentType<any> = () => (
    <View style={{ padding: 20 }}>
        <Text>Auth View (Not Available in Expo Go)</Text>
    </View>
)

try {
    // We only attempt to load native components if we are NOT in Expo Go
    if (!isExpoGo) {
        /* eslint-disable @typescript-eslint/no-var-requires */
        const NativeClerk = require('@clerk/expo/native')
        if (NativeClerk.UserButton) UserButton = NativeClerk.UserButton
        if (NativeClerk.UserProfileView) UserProfileView = NativeClerk.UserProfileView
        if (NativeClerk.AuthView) AuthView = NativeClerk.AuthView
    }
} catch {
    console.warn("⚠️ Failed to load Clerk native components. Fallback to Safe components.")
}

export { UserButton, UserProfileView, AuthView }
