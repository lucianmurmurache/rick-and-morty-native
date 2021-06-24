import React from 'react';
import { Button, Text, View, Image, Platform } from 'react-native';

import tailwind from 'tailwind-rn';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({ navigation }) => {
  return (
    <View style={tailwind('h-full py-5 bg-gray-700')}>
      <Image
        source={require('../assets/logo.png')}
        style={tailwind('w-96 mx-1 my-5 h-96')}
      />
      {Platform.select({
        ios: (
          <Button
            title='Characters'
            style={tailwind('py-2 px-6 text-center rounded-lg mx-3 my-3')}
            onPress={() => navigation.navigate('Characters')}
          />
        ),
        android: (
          <LinearGradient
            style={tailwind('py-2 px-6 text-center rounded-lg mx-3 my-3')}
            colors={['#526E2D', '#3E584F', '#4E6E63']}
          >
            <TouchableOpacity
              style={tailwind('w-full')}
              onPress={() => navigation.navigate('Characters')}
            >
              <Text style={tailwind('text-center text-lg text-white')}>
                Characters
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        ),
      })}
      {Platform.select({
        ios: (
          <Button
            title='Episodes'
            style={tailwind('py-2 px-6 text-center rounded-lg mx-3 my-3')}
            onPress={() => navigation.navigate('Episodes')}
          />
        ),
        android: (
          <LinearGradient
            style={tailwind('py-2 px-6 text-center rounded-lg mx-3 my-3')}
            colors={['#526E2D', '#3E584F', '#4E6E63']}
          >
            <TouchableOpacity
              style={tailwind('w-full')}
              onPress={() => navigation.navigate('Episodes')}
            >
              <Text style={tailwind('text-center text-lg text-white')}>
                Episodes
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        ),
      })}
      {Platform.select({
        ios: (
          <Button
            title='Locations'
            style={tailwind('py-2 px-6 text-center rounded-lg mx-3 my-3')}
            onPress={() => navigation.navigate('Locations')}
          />
        ),
        android: (
          <LinearGradient
            style={tailwind('py-2 px-6 text-center rounded-lg mx-3 my-3')}
            colors={['#526E2D', '#3E584F', '#4E6E63']}
          >
            <TouchableOpacity
              style={tailwind('w-full')}
              onPress={() => navigation.navigate('Locations')}
            >
              <Text style={tailwind('text-center text-lg text-white')}>
                Locations
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        ),
      })}
    </View>
  );
};

export default Home;
