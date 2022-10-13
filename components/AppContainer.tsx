import { NativeBaseProvider } from 'native-base'
import { Provider as PaperProvider } from 'react-native-paper'

type TProps = {
  children: JSX.Element | JSX.Element[]
}

export default function ({ children }: TProps) {
  return (
    <NativeBaseProvider>
      <PaperProvider>{children}</PaperProvider>
    </NativeBaseProvider>
  )
}
