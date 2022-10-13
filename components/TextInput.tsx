import { memo, useState, useRef, useEffect, createRef } from 'react'
import { Box, VStack, Text, Input, IInputProps, Pressable } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

export interface ITextInputProps extends IInputProps {
  label: string
  hideShowPassword: boolean
}

type TProps = {
  data: ITextInputProps[]
}

export default memo(({ data }: TProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [forms, setForms] = useState<ITextInputProps[]>([])

  const formRefs = useRef<any>([])

  useEffect(() => {
    // TODO: create all form ref
    formRefs.current = data.map((_, i) => formRefs.current[i] ?? createRef())
    setForms(data)
  }, [])

  return (
    <VStack space="4">
      {forms.map(({ label, type, keyboardType, hideShowPassword, onChangeText }, key) => {
        const isNotLastLength = key + 1 !== forms.length

        if (showPassword) type = 'text'

        const returnKeyType = isNotLastLength ? 'next' : 'done'
        const onSubmitEditing = () => (isNotLastLength ? formRefs.current[key + 1].focus() : {})
        const InputRightElement = hideShowPassword ? (
          <Pressable onPress={() => setShowPassword((prev) => !prev)} mr="4">
            <Ionicons name={showPassword ? 'ios-eye-off' : 'ios-eye'} size={24} color="gray" />
          </Pressable>
        ) : (
          (null as any)
        )

        return (
          <Box key={key}>
            <Text fontSize="sm" fontFamily="Nunito-Medium">
              {label}
            </Text>
            <Input
              {...{ type, keyboardType, returnKeyType, onSubmitEditing, onChangeText, InputRightElement }}
              ref={(ref) => (formRefs.current[key] = ref)}
              fontSize="md"
              mt="1"
              _focus={{ borderColor: '#3A9B0B' }}
            />
          </Box>
        )
      })}
    </VStack>
  )
})
