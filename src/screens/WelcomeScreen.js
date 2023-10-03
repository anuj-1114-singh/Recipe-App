import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {

    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    const navigation = useNavigation();
    useEffect(()=>{
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(()=> ring1padding.value = withSpring(ring1padding.value+hp(5)), 100);
        setTimeout(()=> ring2padding.value = withSpring(ring2padding.value+hp(5.5)), 300);

        setTimeout(()=> navigation.navigate('Home'), 2500)
    },[])

  return (
    <View className="flex-1 justify-center items-center spacing-y-10 bg-amber-500">
        <StatusBar style='light'  />
         {/* logo image with rings */}
         <Animated.View className="  bg-white/20 rounded-full  "  style={{padding:ring2padding}}>
         <Animated.View className="  bg-white/20 rounded-full " style={{padding: ring1padding}}>
         <Image source={{uri:"https://media.istockphoto.com/id/943483254/vector/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-sliced-potato-cucumber.jpg?s=612x612&w=0&k=20&c=qNYr2kI9cku2On18No0EsLO7-GYmCtaMbv2ZBKYzrfQ="}}
          style={{width: hp(20), height: hp(20)}}
           className="rounded-full"
         /> 
       </Animated.View>
         </Animated.View>

         {/* title and punchline */}
         <View className=" flex items-center space-y-2">
         <Text style={{fontSize: hp(7)}} className=" text-white tracking-wide text-6xl">
            Foody
         </Text>
         <Text style={{fontSize: hp(2)}} className=" text-white tracking-wide text-6xl">
            Food is always right
         </Text>
         </View>
         
    </View>
  )
}

export default WelcomeScreen;