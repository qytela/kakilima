import { memo } from 'react'
import { Image, Dimensions } from 'react-native'
import { Box, Text, ScrollView } from 'native-base'

const { width } = Dimensions.get('window')

export default memo(() => {
  return (
    <Box p="6">
      <Text fontSize="lg" fontFamily="Nunito-Bold">
        Produk Pilihan
      </Text>
      <ScrollView mt="2" horizontal showsHorizontalScrollIndicator={false}>
        <Box p="2">
          <Image
            source={require('@/assets/images/Recommendation1.png')}
            resizeMode="cover"
            style={{ width: width / 1.185, borderRadius: 8 }}
          />
        </Box>
        <Box p="2">
          <Image
            source={require('@/assets/images/Recommendation1.png')}
            resizeMode="cover"
            style={{ width: width / 1.185, borderRadius: 8 }}
          />
        </Box>
      </ScrollView>
    </Box>
  )
})
