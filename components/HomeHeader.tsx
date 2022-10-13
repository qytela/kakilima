import { memo } from 'react'
import { StyleSheet } from 'react-native'
import { Box, Text } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

export default memo(() => {
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
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
          <Text fontSize="md" fontFamily="Nunito-Bold" color="white">
            Hi, Fansa
          </Text>
          <Ionicons name="notifications-sharp" size={24} color="white" />
        </Box>
        <Box mt="4">
          <Text fontSize="md" fontFamily="Nunito-Medium" color="white">
            Saldo Kamu,
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
