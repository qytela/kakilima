import { Box, VStack, Text } from 'native-base'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { ClockSvg } from '@/components/Svg'
import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'

export default function () {
  const navigation = useNavigation()

  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <Box flex="1" justifyContent="center" alignItems="center" w="full" h="full" bgColor="white">
        <VStack space="4" alignItems="center" mt="4">
          <Text fontSize="lg" fontFamily="Nunito-Bold">
            Lakukan Pembayaran
          </Text>
          <ClockSvg />
          <Box alignItems="center">
            <Text fontSize="md" fontFamily="Nunito-Medium">
              Belanjaanmu akan diproses setelah
            </Text>
            <Text fontSize="md" fontFamily="Nunito-Medium" mt="-1">
              pembayaran berhasil diverifikasi
            </Text>
          </Box>
        </VStack>

        <VStack space="4" alignItems="center" mt="4">
          <Text fontSize="md" fontFamily="Nunito-Medium">
            BNI Virtual Account
          </Text>
          <Text fontSize="2xl" fontFamily="Nunito-Bold" mt="-4">
            881727812783212
          </Text>
          <Text fontSize="md" fontFamily="Nunito-Medium">
            Total Pembayaran
          </Text>
          <Text fontSize="xl" fontFamily="Nunito-Bold" mt="-4">
            Rp 87.000
          </Text>
        </VStack>

        <VStack w="full" space="4" p="4" mt="12">
          <Button
            color="black"
            onPress={() => {}}
            style={{ borderColor: 'red', borderWidth: 1, backgroundColor: 'white' }}
          >
            <Text fontSize="md" fontFamily="Nunito-Bold" color="red.500">
              BATALKAN PEMBAYARAN
            </Text>
          </Button>
          <Button
            color="white"
            onPress={() => navigation.navigate('SuccessPayment' as never)}
            style={{ backgroundColor: '#3A9B0B' }}
          >
            <Text fontSize="md" fontFamily="Nunito-Bold" color="white">
              REFRESH STATUS
            </Text>
          </Button>
        </VStack>
      </Box>
    </>
  )
}
