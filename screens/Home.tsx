import { Box, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import {
  BeliProdukSvg,
  BeliPulsaSvg,
  BeliTokenListrikSvg,
  CatatanPenjualanSvg,
  LainLainSvg,
  PinjamanSvg,
} from '@/components/Svg'
import FocusAwareStatusBar from '@/components/FocusAwareStatusBar'
import HomeHeader from '@/components/HomeHeader'
import HomeProductCard from '@/components/HomeProductCard'
import HomeRecommendation from '@/components/HomeRecommendation'

export default function () {
  const navigation = useNavigation()

  return (
    <>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#38B24B" />
      <ScrollView w="full" h="full" bgColor="white" showsVerticalScrollIndicator={false}>
        <HomeHeader />

        <Box flexDirection="row" justifyContent="space-around" alignItems="flex-start" mt="6">
          <HomeProductCard
            label="Beli Produk"
            image={<BeliProdukSvg />}
            onPress={() => navigation.navigate('BuyProduct' as never)}
          />
          <HomeProductCard label="Beli Pulsa" image={<BeliPulsaSvg />} disabled />
          <HomeProductCard label="Beli Token Listrik" image={<BeliTokenListrikSvg />} disabled />
        </Box>

        <Box flexDirection="row" justifyContent="space-around" alignItems="flex-start" mt="4">
          <HomeProductCard label="Catatan Penjualan" image={<CatatanPenjualanSvg />} disabled />
          <HomeProductCard
            label="Pinjaman"
            image={<PinjamanSvg />}
            onPress={() => navigation.navigate('Loan' as never)}
          />
          <HomeProductCard label="Lain-Lain" image={<LainLainSvg />} disabled />
        </Box>

        <Box mt="4">
          <HomeRecommendation />
        </Box>
      </ScrollView>
    </>
  )
}
