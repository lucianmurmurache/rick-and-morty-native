import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import tailwind from 'tailwind-rn';

import { getLocations } from '../api/api';

import Paginate from '../components/Paginate';

const LocationsList = () => {
  const [locations, setLocations] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePrevious = () => {
    pageNumber <= 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    pageNumber >= 6 ? setPageNumber(6) : setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    getLocations(pageNumber).then((resolve) => setLocations(resolve.results));
  }, [pageNumber]);

  return (
    <SafeAreaView style={tailwind('min-h-full pb-14')}>
      <View>
        <Paginate handlePrevious={handlePrevious} handleNext={handleNext} />
      </View>
      <FlatList
        data={locations}
        style={tailwind('h-full')}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={tailwind('p-1 border border-gray-800 h-24')}>
            <Text style={tailwind('text-white text-lg')}>{item.name}</Text>
            <Text style={tailwind('text-white text-lg')}>
              Type: {item.type}
            </Text>
            <Text style={tailwind('text-white text-lg')}>
              Dimension: {item.dimension}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default LocationsList;
