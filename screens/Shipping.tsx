import { useState, useMemo } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Box, Text, Pressable, VStack, HStack, Checkbox, Divider, ScrollView } from 'native-base'
import { Button } from 'react-native-paper'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'
import TextInput, { ITextInputProps } from '@/components/TextInput'
import PaymentMethod from '@/components/PaymentMethod'

export default function () {
  const navigation = useNavigation()

  const [count, setCount] = useState(1)

  const createForms = useMemo(
    () =>
      [
        { label: 'Nama Penerima' },
        {
          label: 'No Telepon',
          keyboardType: 'number-pad',
        },
        { label: 'Alamat Lengkap' },
        { label: 'Kota/Kecamatan' },
        { label: 'Kode Pos', keyboardType: 'number-pad' },
      ] as ITextInputProps[],
    []
  )

  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView w="full" h="full" bgColor="white" p="4" showsVerticalScrollIndicator={false}>
        <VStack space="2">
          <Text fontSize="md" fontFamily="Nunito-SemiBold">
            Alamat Pengiriman
          </Text>
          <TextInput data={createForms} />
          <HStack space="2" alignItems="center">
            <Checkbox accessibilityLabel="Checkbox" mt="2" _checked={styles.checkbox} />
            <Text fontSize="sm" fontFamily="Nunito-Medium" mt="1.5">
              Simpan Alamat Untuk Pengiriman Selanjutnya
            </Text>
          </HStack>
        </VStack>

        <Divider mt="4" mb="4" />

        <VStack space="2">
          <Text fontSize="md" fontFamily="Nunito-SemiBold">
            Daftar Belanja
          </Text>
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space="2" alignItems="center">
              <Checkbox accessibilityLabel="Checkbox" _checked={styles.checkbox} />
              <Box
                justifyContent="center"
                alignItems="center"
                borderRadius="8"
                shadow="2"
                bgColor="white"
                style={{ width: 50, height: 50, padding: 2 }}
              >
                <Image
                  source={require('@/assets/images/Product1.png')}
                  resizeMode="cover"
                  style={{ width: '90%', height: '90%', borderRadius: 8 }}
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontFamily="Nunito-Medium">
                  Kecap Manis ABC
                </Text>
                <Text fontSize="sm" fontFamily="Nunito-Bold" color="#F6452D" mt="-1">
                  Rp 4.000
                </Text>
              </Box>
            </HStack>
            <HStack space="2" alignItems="center">
              <Ionicons name="trash-outline" size={24} color="red" />
              <HStack space="2" alignItems="center">
                <Pressable
                  justifyContent="center"
                  alignItems="center"
                  bgColor="#3A9B0B"
                  onPress={() => setCount((prev) => prev - 1)}
                  style={{ padding: 2, borderRadius: 100 }}
                >
                  <AntDesign name="minus" size={16} color="white" />
                </Pressable>
                <Box paddingLeft="2" paddingRight="2" borderBottomWidth="1">
                  <Text fontSize="sm" fontFamily="Nunito-Medium">
                    {count}
                  </Text>
                </Box>
                <Pressable
                  justifyContent="center"
                  alignItems="center"
                  bgColor="#3A9B0B"
                  onPress={() => setCount((prev) => prev + 1)}
                  style={{ padding: 2, borderRadius: 100 }}
                >
                  <AntDesign name="plus" size={16} color="white" />
                </Pressable>
              </HStack>
            </HStack>
          </HStack>
        </VStack>

        <Divider mt="4" mb="2" />

        <PaymentMethod />

        <VStack space="2" mt="2">
          <Text fontSize="md" fontFamily="Nunito-SemiBold">
            Rincian Harga Produk
          </Text>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="md" fontFamily="Nunito-Regular">
              Total Harga Produk
            </Text>
            <Text fontSize="md" fontFamily="Nunito-Regular">
              RP 87.000
            </Text>
          </HStack>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="md" fontFamily="Nunito-Regular">
              Ongkos Kirim
            </Text>
            <Text fontSize="md" fontFamily="Nunito-Regular">
              Free
            </Text>
          </HStack>
        </VStack>

        <Divider mt="4" mb="4" />

        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="md" fontFamily="Nunito-SemiBold">
            Total Harga Produk
          </Text>
          <Text fontSize="lg" fontFamily="Nunito-Bold">
            RP 87.000
          </Text>
        </HStack>

        <Button
          color="white"
          onPress={() => navigation.navigate('PendingPayment' as never)}
          style={{ backgroundColor: '#3A9B0B', marginTop: 12, marginBottom: 24 }}
        >
          <Text fontSize="md" fontFamily="Nunito-Bold" color="white">
            BAYAR
          </Text>
        </Button>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: '#3A9B0B',
  },
})
