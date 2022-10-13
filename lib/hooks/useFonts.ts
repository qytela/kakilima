import * as Font from 'expo-font'

const useFonts = async () => {
  await Font.loadAsync({
    'Nunito-Light': require('@/assets/Nunito/Nunito-Light.ttf'),
    'Nunito-Regular': require('@/assets/Nunito/Nunito-Regular.ttf'),
    'Nunito-Medium': require('@/assets/Nunito/Nunito-Medium.ttf'),
    'Nunito-SemiBold': require('@/assets/Nunito/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('@/assets/Nunito/Nunito-Bold.ttf'),
    'Nunito-ExtraBold': require('@/assets/Nunito/Nunito-ExtraBold.ttf'),
  })
}

export default useFonts
