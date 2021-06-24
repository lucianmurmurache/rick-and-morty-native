import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

import CharacterList from '../components/CharacterList';

const Characters = () => {
  return (
    <View style={tailwind('h-full bg-gray-700')}>
      {/* <Text style={tailwind('text-white text-lg text-center')}>Characters</Text> */}
      <CharacterList />
    </View>
  );
};

export default Characters;
