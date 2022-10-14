import { Box, Text, VStack } from 'native-base'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'
import LoanHeader from '@/components/LoanHeader'

export default function () {
  const navigation = useNavigation()

  return (
    <>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#38B24B" />
      <Box w="full" h="full" bgColor="white">
        <LoanHeader navigation={navigation} />

        <Box p="4">
          <VStack space="2">
            <Text fontSize="md" fontFamily="Nunito-Bold">
              Aktifkan dan dapatkan pinjaman:
            </Text>
            <VStack space="2">
              <Text fontSize="md" fontFamily="Nunito-Medium">
                1. Kamu bisa mendapatknan bantuan dana tunai.
              </Text>
              <Text fontSize="md" fontFamily="Nunito-Medium">
                2. Bunga rendah sehingga tidak memberatkan.
              </Text>
              <Text fontSize="md" fontFamily="Nunito-Medium">
                3. Tenor pinjaman sampai dengan 3 bulan.
              </Text>
              <Text fontSize="md" fontFamily="Nunito-Medium">
                4. Akan ada penambahan limit jika kamu membayar tepat waktu.
              </Text>
              <Text fontSize="md" fontFamily="Nunito-Medium">
                5. Pengajuan mudah, hanya dengan foto ktp dan gerobak / dagangan kamu.
              </Text>
            </VStack>
          </VStack>

          <Box mt="12">
            <Button
              color="white"
              onPress={() => navigation.navigate('PendingLoan' as never)}
              style={{ backgroundColor: '#3A9B0B' }}
            >
              <Text fontSize="md" fontFamily="Nunito-Bold" color="white">
                AKTIFKAN SEKARANG
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
