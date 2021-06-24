import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Image, Text } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

import tailwind from 'tailwind-rn';

import { getCharacters } from '../api/api';

import Paginate from './Paginate';

const CharacterList = () => {
  const [characters, setCharcters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const ref = React.useRef(null);
  useScrollToTop(ref);

  const handlePrevious = () => {
    pageNumber <= 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    pageNumber >= 34 ? setPageNumber(34) : setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    getCharacters(pageNumber).then((resolve) => setCharcters(resolve.results));
  }, [pageNumber]);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <SafeAreaView>
      <View>
        <Paginate handlePrevious={handlePrevious} handleNext={handleNext} />
      </View>
      <FlatList
        ref={ref}
        data={characters}
        style={tailwind('h-full px-3 mb-12')}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image
              style={tailwind('w-96 h-96 mt-6 mx-1')}
              source={{ uri: `${item.image}` }}
            />
            <View style={tailwind('px-1')}>
              <Text style={tailwind('text-white text-xl pt-3')}>
                {item.name} - {item.type || item.species}
              </Text>
              <View>
                <Text style={tailwind('text-lg text-white')}>
                  Status:{' '}
                  {item.status === 'Alive' ? (
                    <Text style={tailwind('text-lg text-green-400')}>
                      {Capitalize(item.status)}
                    </Text>
                  ) : item.status === 'Dead' ? (
                    <Text style={tailwind('text-lg text-red-400')}>
                      {Capitalize(item.status)}
                    </Text>
                  ) : (
                    <Text style={tailwind('text-lg text-yellow-400')}>
                      {Capitalize(item.status)}
                    </Text>
                  )}
                </Text>
              </View>

              <Text style={tailwind('text-lg text-white')}>
                Origin: {Capitalize(item.origin.name)}
              </Text>
              <Text style={tailwind('text-lg text-white')}>
                Last known location: {item.location.name}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CharacterList;
