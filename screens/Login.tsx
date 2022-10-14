import { useState, useMemo } from 'react'
import { Image } from 'react-native'
import { Box, StatusBar, Text, VStack } from 'native-base'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import TextInput, { ITextInputProps } from '@/components/TextInput'

export default function () {
  const navigation = useNavigation()

  const [noHandphone, setNoHandphone] = useState('')
  const [password, setPassword] = useState('')

  const createForms = useMemo(
    () =>
      [
        {
          label: 'No Handphone',
          keyboardType: 'number-pad',
          onChangeText: (val: string) => setNoHandphone(val),
        },
        {
          label: 'Password',
          type: 'password',
          hideShowPassword: true,
          onChangeText: (val: string) => setPassword(val),
        },
      ] as ITextInputProps[],
    []
  )

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Box w="full" h="full" bgColor="white">
        <Box justifyContent="center" alignItems="center" p="4" mt="8">
          <Image
            source={require('@/assets/images/KakiLimaSaja.png')}
            resizeMode="cover"
            style={{ width: 120, height: 135 }}
          />

          <Box w="full" mt="8">
            <VStack space="12">
              <TextInput data={createForms} />
              <VStack space="2">
                <Button
                  color="white"
                  onPress={() => navigation.navigate('HomeTab' as never)}
                  style={{ backgroundColor: '#3A9B0B' }}
                >
                  <Text fontSize="md" fontFamily="Nunito-Bold" color="white">
                    MASUK
                  </Text>
                </Button>
                <Text textAlign="center">
                  Tidak memiliki akun?{' '}
                  <Text
                    fontFamily="Nunito-Bold"
                    color="#3A9B0B"
                    onPress={() => navigation.navigate('Register' as never)}
                  >
                    Daftar
                  </Text>
                </Text>
              </VStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </>
  )
}
