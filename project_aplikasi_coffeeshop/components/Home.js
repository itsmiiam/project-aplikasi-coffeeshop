import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import coffeeData from '../assets/Coffee';

const Home = ({ navigation }) => {
  const [data, setData] = useState(coffeeData);

  const listCoffee = ({ item }) => {
    return (
      <Card 
        style={styles.cardUtama}
        onPress={() => navigation.navigate('Detail', { coffee: item })}
      >
        <View style={styles.cardView}>
          <Image
            style={styles.coffeeImage}
            source={item.thumbnail}
          />
          <View style={styles.contentContainer}>
            <Title style={styles.titleText}>{item.title}</Title>
            <Text style={styles.detailText}>{item.detail}</Text>
            
          </View>
        </View>
      </Card>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="local-cafe" size={30} color="#4A3728" />
        <Text style={styles.headerText}>Coffee Menu</Text>
      </View>
      <FlatList
        data={data}
        renderItem={listCoffee}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3EF', // Warna background cream light
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A3728',
    marginLeft: 10,
    letterSpacing: 1,
  },
  listContainer: {
    padding: 10,
  },
  cardUtama: {
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 15,
    elevation: 4,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  cardView: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  coffeeImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#8B7355',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A3728',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(139, 115, 85, 0.1)',
    padding: 6,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A3728',
    marginLeft: 5,
  },
});

export default Home;