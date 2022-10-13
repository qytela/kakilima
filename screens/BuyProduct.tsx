import { StyleSheet, Dimensions, Image } from 'react-native'
import { Box, Text, Pressable, FlatList } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'

const { width } = Dimensions.get('window')

export default function () {
  const navigation = useNavigation()

  const products = [
    {
      label: 'Kecap ABC Manis',
      price: '4.000',
      image: require('@/assets/images/Product1.png'),
    },
    {
      label: 'Sambal Terasi',
      price: '12.000',
      image: require('@/assets/images/Product2.png'),
    },
    {
      label: 'Segitiga Biru Terigu',
      price: '8.000',
      image: require('@/assets/images/Product3.png'),
    },
    {
      label: 'Garam Himalaya',
      price: '100.000',
      image: require('@/assets/images/Product4.png'),
    },
    {
      label: 'Royco Ayam',
      price: '2.000',
      image: require('@/assets/images/Product5.png'),
    },
    {
      label: 'Sosis Kimbo Lezat dan Bergizi',
      price: '5.000',
      image: require('@/assets/images/Product6.png'),
    },
  ]

  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <FlatList
        data={products}
        keyExtractor={(i_, i) => i.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable w="48%" shadow="1" bg="white" m="1" onPress={() => navigation.navigate('DetailProduct' as never)}>
            <Image source={item.image} resizeMode="cover" style={styles.imageCard} />
            <Box p="2">
              <Text fontSize="sm" fontFamily="Nunito-SemiBold">
                {item.label}
              </Text>
              <Text fontSize="sm" fontFamily="Nunito-SemiBold" mt="1">
                Rp{' '}
                <Text fontSize="lg" fontFamily="Nunito-SemiBold" color="#F6452D">
                  {item.price}
                </Text>
              </Text>
            </Box>
          </Pressable>
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  imageCard: {
    width: '100%',
    height: width / 2.5,
  },
})
