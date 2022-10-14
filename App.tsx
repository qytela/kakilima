import { useState, useEffect } from 'react'
import { Text } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import AppContainer from '@/components/AppContainer'

import SplashScreen from '@/screens/SplashScreen'

// Auth
import Login from '@/screens/Login'
import Register from '@/screens/Register'

// Home
import Home from '@/screens/Home'

// Product
import BuyProduct from '@/screens/BuyProduct'
import DetailProduct from '@/screens/DetailProduct'
import Shipping from '@/screens/Shipping'

// Payment
import PendingPayment from '@/screens/PendingPayment'
import SuccessPayment from '@/screens/SuccessPayment'

// Loan
import Loan from '@/screens/Loan'
import PendingLoan from '@/screens/PendingLoan'

// etc
import UnderContrusction from '@/screens/UnderContrusction'

import useFonts from '@/lib/hooks/useFonts'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeTab = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        tabBarStyle: {
          height: 66,
        },
        tabBarActiveTintColor: '#3A9B0B',
        tabBarLabel: ({ color }: any) => (
          <Text fontSize="xs" fontFamily="Nunito-Bold" color={color} bottom="2">
            Beranda
          </Text>
        ),
        tabBarIcon: ({ color }: any) => <Ionicons name="home" size={30} color={color} />,
      }}
    />
    <Tab.Screen
      name="Transaction"
      component={UnderContrusction}
      options={{
        headerShown: false,
        tabBarStyle: {
          height: 66,
        },
        tabBarActiveTintColor: '#3A9B0B',
        tabBarLabel: ({ color }: any) => (
          <Text fontSize="xs" fontFamily="Nunito-Bold" color={color} bottom="2">
            Transaksi
          </Text>
        ),
        tabBarIcon: ({ color }: any) => <MaterialCommunityIcons name="transition-masked" size={30} color={color} />,
      }}
    />
    <Tab.Screen
      name="Cart"
      component={UnderContrusction}
      options={{
        headerShown: false,
        tabBarStyle: {
          height: 66,
        },
        tabBarActiveTintColor: '#3A9B0B',
        tabBarLabel: ({ color }: any) => (
          <Text fontSize="xs" fontFamily="Nunito-Bold" color={color} bottom="2">
            Keranjang
          </Text>
        ),
        tabBarIcon: ({ color }: any) => <Ionicons name="cart-sharp" size={30} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={UnderContrusction}
      options={{
        headerShown: false,
        tabBarStyle: {
          height: 66,
        },
        tabBarActiveTintColor: '#3A9B0B',
        tabBarLabel: ({ color }: any) => (
          <Text fontSize="xs" fontFamily="Nunito-Bold" color={color} bottom="2">
            Profil
          </Text>
        ),
        tabBarIcon: ({ color }: any) => <Ionicons name="person-circle-sharp" size={30} color={color} />,
      }}
    />
  </Tab.Navigator>
)

export default function () {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    const prepare = async () => {
      // TODO: load fonts before app ready
      await loadFonts()
      setAppIsReady((prev) => !prev)
    }
    prepare()
  }, [])

  const loadFonts = async () => await useFonts()

  if (!appIsReady) return null
  return (
    <AppContainer>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={({ navigation }) => ({
              headerTitleAlign: 'center',
              headerTitle: 'Registration',
              headerTitleStyle: {
                fontSize: 16,
              },
              headerLeft: () => (
                <Ionicons name="chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
              ),
            })}
          />
          <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
          <Stack.Screen
            name="BuyProduct"
            component={BuyProduct}
            options={({ navigation }) => ({
              headerTitleAlign: 'center',
              headerTitle: '',
              headerTitleStyle: {
                fontSize: 16,
              },
              headerLeft: () => (
                <Ionicons name="chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
              ),
            })}
          />
          <Stack.Screen
            name="DetailProduct"
            component={DetailProduct}
            options={({ navigation }) => ({
              headerTitleAlign: 'center',
              headerTitle: 'Detail Produk',
              headerTitleStyle: {
                fontSize: 16,
              },
              headerLeft: () => (
                <Ionicons name="chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
              ),
            })}
          />
          <Stack.Screen
            name="Shipping"
            component={Shipping}
            options={({ navigation }) => ({
              headerTitleAlign: 'center',
              headerTitle: 'Pengiriman',
              headerTitleStyle: {
                fontSize: 16,
              },
              headerLeft: () => (
                <Ionicons name="chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
              ),
            })}
          />
          <Stack.Screen
            name="PendingPayment"
            component={PendingPayment}
            options={({ navigation }) => ({
              headerTitleAlign: 'center',
              headerTitle: 'Pembayaran',
              headerTitleStyle: {
                fontSize: 16,
              },
              headerLeft: () => (
                <Ionicons name="chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
              ),
            })}
          />
          <Stack.Screen
            name="SuccessPayment"
            component={SuccessPayment}
            options={({ navigation }) => ({
              headerTitleAlign: 'center',
              headerTitle: 'Pembayaran Berhasil',
              headerTitleStyle: {
                fontSize: 16,
              },
              headerLeft: () => (
                <Ionicons name="chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
              ),
            })}
          />
          <Stack.Screen name="Loan" component={Loan} options={{ headerShown: false }} />
          <Stack.Screen
            name="PendingLoan"
            component={PendingLoan}
            options={({ navigation }) => ({
              headerTitleAlign: 'center',
              headerTitle: 'Pengajuan Pinjaman',
              headerTitleStyle: {
                fontSize: 16,
              },
              headerLeft: () => (
                <Ionicons name="chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContainer>
  )
}
