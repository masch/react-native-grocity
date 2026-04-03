import { FontAwesome } from '@expo/vector-icons'
import { Image } from 'expo-image'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

interface SocialSignInButtonProps {
    provider: 'google' | 'apple' | 'github'
    isLoading: boolean
    isConnecting: boolean
    onPress: () => void
}

// Configuración estática fuera del componente para evitar re-creación en cada render
const SOCIAL_CONFIG = {
    google: {
        label: "Google",
        icon: (
            <Image
                source={require('../../assets/images/google.png')}
                style={{ width: 20, height: 20 }}
            />
        ),
    },
    apple: {
        label: "Apple",
        icon: <FontAwesome name="apple" size={24} color="#000" />,
    },
    github: {
        label: "GitHub",
        icon: <FontAwesome name="github" size={24} color="#111" />,
    },
}

const SocialSignInButton = ({ provider, isLoading, isConnecting, onPress }: SocialSignInButtonProps) => {
    const { label, icon } = SOCIAL_CONFIG[provider]

    return (
        <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border border-border bg-card px-4 active:opacity-90 ${isLoading ? "opacity-70" : ""}`}
            disabled={isLoading}
            onPress={onPress}
        >
            <View className="size-8 items-center justify-center rounded-full bg-white">
                {icon}
            </View>

            <Text className="ml-3 flex-1 text-lg font-semibold text-card-foreground">
                {isConnecting ? `Connecting ${label}...` : `Continue with ${label}`}
            </Text>

            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
        </Pressable>
    )
}

export default SocialSignInButton
