import { View, Text } from 'react-native'

export const UserButton = (props: any) => {
    return (
        <View className="w-9 h-9 bg-primary rounded-full border-2 border-primary-foreground" />
    )
}

export const UserProfileView = (props: any) => {
    return (
        <View className="flex-1 justify-center items-center bg-background p-10">
            <Text className="text-primary text-xl font-bold uppercase">Modo Nativo Requerido</Text>
            <Text className="text-foreground mt-2 text-center">
                Este componente solo está disponible en la app móvil.
            </Text>
        </View>
    )
}

export const AuthView = (props: any) => {
    return (
        <View className="flex-1 min-h-[400px] justify-center items-center bg-background p-10">
            <View className="border-2 border-primary p-7 rounded-3xl w-full max-w-[300px]">
                <Text className="text-primary text-3xl font-bold text-center">GROCITY WEB</Text>
                <View className="h-[2px] bg-primary my-5" />
                <Text className="text-foreground text-lg font-bold text-center">Autenticación Universal</Text>
                <Text className="text-muted-foreground mt-4 text-center">
                    Para usar Clerk en Web necesitás implementar el flujo de Clerk JS. 
                    Por ahora, usá el emulador o un dispositivo real.
                </Text>
            </View>
        </View>
    )
}
