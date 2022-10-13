import { useEffect } from 'react'
import { ImageBackground } from 'react-native'
import { Box, StatusBar } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export default function () {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => navigation.navigate('Login' as never), 1000)
  }, [])

  return (
    <>
      <StatusBar backgroundColor="#38B24B" />
      <Box w="full" h="full">
        <ImageBackground
          source={require('@/assets/images/SplashScreen.png')}
          style={{ flex: 1, justifyContent: 'center' }}
        />
      </Box>
    </>
  )
}
