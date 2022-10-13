import { useMemo } from 'react'
import { Box, Text, VStack, ScrollView } from 'native-base'
import { Button } from 'react-native-paper'

import TextInput, { ITextInputProps } from '@/components/TextInput'

export default function () {
  const createForms = useMemo(
    () =>
      [
        {
          label: 'Nama',
          type: 'text',
          keyboardType: 'default',
        },
        {
          label: 'No Handphone',
          type: 'text',
          keyboardType: 'number-pad',
        },
        {
          label: 'Password',
          type: 'password',
          keyboardType: 'default',
          hideShowPassword: true,
        },
        {
          label: 'Tulis Ulang Password',
          type: 'password',
          keyboardType: 'default',
          hideShowPassword: true,
        },
      ] as ITextInputProps[],
    []
  )

  return (
    <ScrollView w="full" h="full" bgColor="white" showsVerticalScrollIndicator={false}>
      <Box justifyContent="center" alignItems="center" p="4">
        <Text fontSize="lg" fontFamily="Nunito-Bold">
          Registrasi Pengguna Baru
        </Text>
        <Box w="full" mt="8">
          <VStack space="12">
            <TextInput data={createForms} />
            <Button color="white" style={{ backgroundColor: '#3A9B0B' }} onPress={() => {}}>
              <Text fontSize="md" fontFamily="Nunito-Bold" color="white">
                DAFTAR
              </Text>
            </Button>
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  )
}
