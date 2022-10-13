import { memo } from 'react'
import { StyleSheet } from 'react-native'
import { Box, Text, Pressable } from 'native-base'

type TProps = {
  label: string
  image: JSX.Element
  onPress?: any
}

export default memo(({ label, image, onPress }: TProps) => {
  return (
    <Pressable onPress={onPress} style={styles.productCard}>
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        h="20"
        shadow="6"
        borderRadius="md"
        bgColor="white"
      >
        {image}
      </Box>
      <Text fontSize="sm" fontFamily="Nunito-Medium" textAlign="center" mt="1.5">
        {label}
      </Text>
    </Pressable>
  )
})

const styles = StyleSheet.create({
  productCard: {
    width: 75,
  },
})
