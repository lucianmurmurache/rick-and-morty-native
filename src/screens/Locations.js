import React from 'react';
import { View, Text } from 'react-native';

import tailwind from 'tailwind-rn';
import LocationsList from '../components/LocationsList';

const Locations = () => {
  return (
    <View style={tailwind('h-full bg-gray-700 pt-5')}>
      <LocationsList />
    </View>
  );
};

export default Locations;
