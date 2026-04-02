import { useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function SignInScreen() {
    const { isSignedIn } = useAuth({ treatPendingAsSignedOut: false })
    const router = useRouter()

    useEffect(() => {
        if (isSignedIn) {
            router.replace('/(home)')
        }
    }, [isSignedIn])

    return (
        <View className="flex-1 justify-center items-center bg-background p-10">
            <Text className="text-foreground text-2xl font-bold">Web Authentication Flow</Text>
            <Text className="text-muted-foreground mt-2 text-center max-w-[300px]">
                Please use the native app for AuthView or implement a custom web flow.
            </Text>
        </View>
    )
}
