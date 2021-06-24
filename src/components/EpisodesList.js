import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import tailwind from 'tailwind-rn';

import { getEpisodes } from '../api/api';

import Paginate from '../components/Paginate';

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePrevious = () => {
    pageNumber <= 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    pageNumber >= 3 ? setPageNumber(3) : setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    getEpisodes(pageNumber).then((resolve) => setEpisodes(resolve.results));
  }, [pageNumber]);

  return (
    <SafeAreaView style={tailwind('min-h-full pb-14')}>
      <View>
        <Paginate handlePrevious={handlePrevious} handleNext={handleNext} />
      </View>
      <FlatList
        data={episodes}
        style={tailwind('h-full')}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={tailwind('p-1 border border-gray-800 h-24')}>
            <Text style={tailwind('text-white text-lg')}>{item.episode}</Text>
            <Text style={tailwind('text-white text-lg')}>{item.name}</Text>
            <Text style={tailwind('text-white text-lg')}>{item.air_date}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default EpisodesList;
