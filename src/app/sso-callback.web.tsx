import React from 'react'
import { StyleSheet, View } from 'react-native'

// WEB EXCLUSIVE VERSION: Uses Clerk's official component for browsers.
// We import it dynamically from @clerk/expo to keep Metro happy on native platforms.
const { AuthenticateWithRedirectCallback } = require('@clerk/expo')

export default function SSOCallbackWeb() {
    return (
        <View style={styles.container}>
            {AuthenticateWithRedirectCallback ? (
                <AuthenticateWithRedirectCallback />
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
