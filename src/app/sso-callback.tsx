import { AuthenticateWithRedirectCallback } from '@clerk/expo'
import { View } from 'react-native'

export default function SSOCallback() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <AuthenticateWithRedirectCallback />
    </View>
  )
}
