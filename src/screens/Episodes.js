import React from 'react';
import { View } from 'react-native';

import tailwind from 'tailwind-rn';

import EpisodesList from '../components/EpisodesList';

const Episodes = () => {
  return (
    <View style={tailwind('h-full bg-gray-700 pt-5')}>
      <EpisodesList />
    </View>
  );
};

export default Episodes;
