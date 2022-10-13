import { Dimensions } from 'react-native'
import { Box, Text } from 'native-base'
import LottieView from 'lottie-react-native'

import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'

const { width } = Dimensions.get('window')

export default function () {
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
      <Box flex="1" justifyContent="center" alignItems="center" w="full" h="full" bgColor="white">
        <LottieView
          source={require('@/assets/lottie/27330-construction-in-process-by-kit8net.json')}
          autoPlay
          autoSize
          resizeMode="cover"
          style={{ width: width / 1 }}
        />
        <Text fontSize="lg" fontFamily="Nunito-ExtraBold" textAlign="center" mt="2">
          Fitur masih dalam
        </Text>
        <Text fontSize="lg" fontFamily="Nunito-ExtraBold" textAlign="center" mt="-1">
          tahap pengembangan <Text fontSize="sm">(︶︹︺)</Text>
        </Text>
      </Box>
    </>
  )
}
