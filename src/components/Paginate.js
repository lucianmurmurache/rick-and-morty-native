import React from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import tailwind from 'tailwind-rn';

const Paginate = ({ handlePrevious, handleNext }) => {
  return (
    <SafeAreaView style={tailwind('px-4 py-2 border-b border-gray-600')}>
      <View style={tailwind('flex-row justify-evenly')}>
        <Pressable
          onPress={handlePrevious}
          style={tailwind(
            'px-3 py-2 w-40 rounded-xl border border-gray-600 bg-gray-500',
          )}
        >
          <Text style={tailwind('text-xl text-white text-center')}>
            Previous
          </Text>
        </Pressable>

        <Pressable
          onPress={handleNext}
          style={tailwind(
            'px-3 py-2 w-40 rounded-xl border border-gray-500 bg-gray-500',
          )}
        >
          <Text style={tailwind('text-xl text-white text-center')}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Paginate;
