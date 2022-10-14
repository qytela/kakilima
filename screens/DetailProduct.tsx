import { StyleSheet, Dimensions, Image } from 'react-native'
import { Box, Text, ScrollView, VStack, Pressable, Divider } from 'native-base'
import { Button } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'

const { width } = Dimensions.get('window')

export default function () {
  const navigation = useNavigation()

  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <Box flex="1">
        <ScrollView w="full" h="full" bgColor="white" showsVerticalScrollIndicator={false}>
          <Image source={require('@/assets/images/Product1.png')} resizeMode="cover" style={styles.image} />
          <Box p="4">
            <Text fontSize="lg" fontFamily="Nunito-SemiBold">
              Kecap ABC Manis
            </Text>
            <Text fontSize="lg" fontFamily="Nunito-SemiBold" color="#F6452D">
              Rp 4.000
            </Text>

            <Divider mt="4" mb="4" />

            <VStack space="2">
              <Box>
                <Text fontSize="md" fontFamily="Nunito-SemiBold">
                  Deskripsi
                </Text>
                <Text fontSize="md" fontFamily="Nunito-Light" paddingLeft="2" paddingRight="2">
                  Kecap manis ABC dibuat dengan kedelai, gandum dan gula merah pilihan sehingga menghasilkan kecap manis
                  dengan citarasa mantap, hitam dan kental. KOMPOSISI : Gula, air, garam, kedelai, biji gandum, pengawet
                  natrium benzoat, pemantap nabati.
                </Text>
              </Box>

              <Box>
                <Text fontSize="md" fontFamily="Nunito-SemiBold">
                  Exp Date
                </Text>
                <Text fontSize="md" fontFamily="Nunito-Light" paddingLeft="2" paddingRight="2">
                  1 Oct 2024
                </Text>
              </Box>

              <Box>
                <Text fontSize="md" fontFamily="Nunito-SemiBold">
                  Halal MUI
                </Text>
                <Text fontSize="md" fontFamily="Nunito-Light" paddingLeft="2" paddingRight="2">
                  10921020120121029
                </Text>
              </Box>
            </VStack>
          </Box>
        </ScrollView>

        <Box flexDirection="row" justifyContent="space-around" alignItems="center" shadow="9" bgColor="white" p="2">
          <Pressable
            paddingTop="2"
            paddingBottom="2"
            paddingLeft="3"
            paddingRight="3"
            borderColor="#EF4D2C"
            borderWidth="1"
            borderRadius="8"
            onPress={() => {}}
          >
            <Ionicons name="cart-sharp" size={24} color="#EF4D2C" />
          </Pressable>
          <Button
            mode="contained"
            color="#3A9B0B"
            onPress={() => navigation.navigate('Shipping' as never)}
            style={styles.footerButton}
          >
            <Text fontSize="md" fontFamily="Nunito-Bold" color="white">
              BELI SEKARANG
            </Text>
          </Button>
        </Box>
      </Box>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width / 1.5,
  },
  footerButton: {
    flex: 1,
    width: '100%',
    marginLeft: 8,
  },
})
