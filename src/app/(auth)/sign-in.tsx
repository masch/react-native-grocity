import useSocialAuth from '@/hooks/useSocialAuth'
import { Text, View } from 'react-native'

export default function SignInScreen() {
    const { handleSocialAuth, loadingStrategy } = useSocialAuth()

    return (
        <View className='flex-1 justify-center items-center'>
            <Text>HEY!</Text>
        </View>
    )
}