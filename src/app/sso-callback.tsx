import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useClerk, useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router'

// Native version (Android/iOS).
// Thanks to file-based routing (.web.tsx), Metro will NEVER try to load this in the browser.

export default function SSOCallbackNative() {
    const { handleRedirectCallback } = useClerk()
    const { isLoaded, isSignedIn } = useAuth()
    const router = useRouter()

    useEffect(() => {
        // 1. If session is already loaded and user is signed in, redirect home
        if (isLoaded && isSignedIn) {
            router.replace("/(home)")
            return
        }

        // 2. Otherwise, manually handle the redirect callback from Clerk
        const process = async () => {
            try {
                console.log("🔄 Processing native callback...")
                // @ts-ignore - Handle context-specific types from Clerk Expo
                await handleRedirectCallback({ })
                
                // Extra safety: manually redirect if handleRedirectCallback didn't do it
                router.replace("/(home)")
            } catch (err) {
                console.error("❌ SSO Callback Error:", err)
                router.replace("/(auth)/sign-in")
            }
        }

        process()
    }, [isLoaded, isSignedIn, handleRedirectCallback, router])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <ActivityIndicator size="large" color="#0a7ea4" />
        </View>
    )
}
