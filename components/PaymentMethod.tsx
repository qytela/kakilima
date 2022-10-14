import { memo } from 'react'
import { Text, Pressable, HStack } from 'native-base'
import { List, RadioButton } from 'react-native-paper'

import { CashSvg, SaldoSvg, OVOSvg, GopaySvg, BNISvg, BRISvg } from '@/components/Svg'

export default memo(() => {
  return (
    <List.Section>
      <List.Accordion
        title="Pilih Metode Pembayaran"
        titleStyle={{ fontFamily: 'Nunito-SemiBold', color: 'black' }}
        style={{ backgroundColor: '#EDEDED', padding: 0 }}
      >
        <Pressable
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft="4"
          paddingRight="4"
          ml="2"
        >
          <HStack space="2" alignItems="center">
            <CashSvg />
            <Text fontSize="md" fontFamily="Nunito-Medium" ml="2">
              Bayar Ketika Sampai
            </Text>
          </HStack>
          <RadioButton value="first" color="#3A9B0B" />
        </Pressable>
        <Pressable
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft="4"
          paddingRight="4"
        >
          <HStack space="2" alignItems="center">
            <SaldoSvg />
            <Text fontSize="md" fontFamily="Nunito-Medium">
              Saldo
            </Text>
          </HStack>
          <RadioButton value="first" color="#3A9B0B" />
        </Pressable>
        <Pressable
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft="4"
          paddingRight="4"
        >
          <HStack space="2" alignItems="center">
            <OVOSvg />
            <Text fontSize="md" fontFamily="Nunito-Medium">
              OVO
            </Text>
          </HStack>
          <RadioButton value="first" color="#3A9B0B" />
        </Pressable>
        <Pressable
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft="4"
          paddingRight="4"
        >
          <HStack space="2" alignItems="center">
            <GopaySvg />
            <Text fontSize="md" fontFamily="Nunito-Medium">
              Gopay
            </Text>
          </HStack>
          <RadioButton value="first" color="#3A9B0B" />
        </Pressable>
        <Pressable
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft="4"
          paddingRight="4"
        >
          <HStack space="2" alignItems="center">
            <BNISvg />
            <Text fontSize="md" fontFamily="Nunito-Medium">
              BNI Virtual Account
            </Text>
          </HStack>
          <RadioButton value="first" status="checked" color="#3A9B0B" />
        </Pressable>
        <Pressable
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft="4"
          paddingRight="4"
        >
          <HStack space="2" alignItems="center">
            <BRISvg />
            <Text fontSize="md" fontFamily="Nunito-Medium">
              BRI Virtual Account
            </Text>
          </HStack>
          <RadioButton value="first" color="#3A9B0B" />
        </Pressable>
      </List.Accordion>
    </List.Section>
  )
})
