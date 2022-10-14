import { Box, VStack, Text } from 'native-base'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { SuccessCircleSvg } from '@/components/Svg'
import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'

export default function () {
  const navigation = useNavigation()

  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <Box flex="1" justifyContent="center" alignItems="center" w="full" h="full" bgColor="white">
        <VStack space="4" alignItems="center" mt="4">
          <Text fontSize="lg" fontFamily="Nunito-Bold">
            Pengajuan Pinjaman Berhasil
          </Text>
          <SuccessCircleSvg />
          <Box alignItems="center">
            <Text fontSize="md" fontFamily="Nunito-Medium">
              Pengajuan pinjaman kamu sedang kami proses.
            </Text>
            <Text fontSize="md" fontFamily="Nunito-Medium" mt="-1">
              Tim kami akan melakukan verifikasi
            </Text>
            <Text fontSize="md" fontFamily="Nunito-Medium" mt="-1">
              paling lama 2x24 jam
            </Text>
          </Box>
          <Box alignItems="center">
            <Text fontSize="md" fontFamily="Nunito-Medium">
              Status pengajuan pinjaman kamu:
            </Text>
            <Text fontSize="lg" fontFamily="Nunito-Bold" color="#D97705">
              DALAM PROSES
            </Text>
          </Box>
        </VStack>

        <VStack w="full" space="4" p="4" mt="12">
          <Button
            color="white"
            onPress={() => navigation.navigate('HomeTab' as never)}
            style={{ backgroundColor: '#3A9B0B' }}
          >
            <Text fontSize="md" fontFamily="Nunito-Bold" color="white">
              KEMBALI KE HALAMAN UTAMA
            </Text>
          </Button>
        </VStack>
      </Box>
    </>
  )
}
