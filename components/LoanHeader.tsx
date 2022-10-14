import { memo } from 'react'
import { StyleSheet } from 'react-native'
import { Box, Text } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { NavigationProp } from '@react-navigation/native'

type TProps = {
  navigation: NavigationProp<ReactNavigation.RootParamList>
}

export default memo(({ navigation }: TProps) => {
  return (
    <LinearGradient colors={['#39B54A', '#0D793B']} style={styles.linearCard}>
      <Box
        paddingTop="4"
        paddingBottom="8"
        paddingRight="6"
        paddingLeft="6"
        borderBottomLeftRadius="40"
        borderBottomRadius="40"
      >
        <Box flexDirection="row" justifyContent="center" alignItems="baseline">
          <Box position="absolute" left="0">
            <Ionicons name="chevron-back-outline" size={24} color="white" onPress={() => navigation.goBack()} />
          </Box>
          <Text fontSize="md" fontFamily="Nunito-Bold" color="white">
            Pinjaman
          </Text>
        </Box>
        <Box alignItems="center" mt="4">
          <Text fontSize="md" fontFamily="Nunito-Medium" color="white">
            Aktifkan dan dapatkan pinjaman
          </Text>
          <Text fontSize="2xl" fontFamily="Nunito-Bold" color="white">
            Rp 500.000
          </Text>
        </Box>
      </Box>
    </LinearGradient>
  )
})

const styles = StyleSheet.create({
  linearCard: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
})
