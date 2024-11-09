import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import dataComponentCard from '../res/dataComponentCard';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(dataComponentCard);

  // Function to filter data based on the search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = dataComponentCard.map((brand) => ({
      ...brand,
      data: brand.data.filter((car) =>
        car.name.toLowerCase().includes(query.toLowerCase()) ||
        car.address.toLowerCase().includes(query.toLowerCase())
      ),
    }));
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a car or brand"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Scrollable list of brands and cars */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredData.map((brand) => (
          <View key={brand.id} style={styles.brandContainer}>
            {/* Brand Name */}
            {/* <Text style={styles.brandName}>{brand.name}</Text> */}

            {/* Car List */}
            {brand.data.length > 0 ? (
              brand.data.map((car) => (
                <TouchableOpacity key={car.id} style={styles.carCard}>
                  <Image source={car.img} style={styles.carImage} />
                  <View style={styles.carDetails}>
                    <Text style={styles.carName}>{car.name}</Text>
                    <Text style={styles.carAddress}>{car.address}</Text>
                    <Text style={styles.carPhone}>{car.phone}</Text>
                    <Text style={styles.carPrice}>₪{car.price}</Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.noResults}>No results found</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  brandContainer: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderColor: '#eee',
    paddingBottom: 20,
  },
  brandName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#FFD700', // Gold background for brand name
    paddingVertical: 5,
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  carCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // for android
  },
  carImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
  },
  carDetails: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  carAddress: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  carPhone: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  carPrice: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: 'bold',
    marginTop: 10,
  },
  noResults: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    padding: 20,
  },
});

export default SearchScreen;
