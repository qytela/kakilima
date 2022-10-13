import { StatusBar, StatusBarProps } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

export default function (props: StatusBarProps) {
  const isFocused = useIsFocused()

  return isFocused ? <StatusBar {...props} /> : null
}
