import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Detail = ({ route, navigation }) => {
  const { coffee } = route.params;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4A3728", "#8B7355"]} // Warna coklat yang lebih deep
        style={styles.gradient} 
      />
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}  
          source={coffee.poster}  
        />
      </View>
      
      <View style={styles.contentContainer}>
        <Title style={styles.title}>{coffee.title}</Title>
        <Text style={styles.detailText}>{coffee.detail}</Text>
      </View>

      <Card style={styles.card}>
        <View style={styles.priceContainer}>
          <MaterialIcons name="attach-money" size={35} color="#4A3728" />
          <Text style={styles.priceText}>{coffee.price}</Text>
        </View>
      </Card>

      <View style={styles.decorationContainer}>
        <MaterialIcons name="coffee" size={24} color="#8B7355" />
        <View style={styles.divider} />
        <Entypo name="leaf" size={24} color="#8B7355" />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3EF', // Warna background cream light
  },
  gradient: {
    height: "25%",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  imageContainer: {
    alignItems: "center",
    elevation: 8,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginTop: -80,
    borderWidth: 5,
    borderColor: '#F5F3EF',
  },
  contentContainer: {
    alignItems: 'center',
    margin: 20,
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A3728',
    marginBottom: 15,
    letterSpacing: 1,
  },
  detailText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    fontStyle: 'italic',
  },
  card: {
    margin: 15,
    borderRadius: 20,
    elevation: 4,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  priceContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(139, 115, 85, 0.1)', // Light brown background
    borderRadius: 20,
  },
  priceText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4A3728',
    marginLeft: 8,
    letterSpacing: 1,
  },
  decorationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#8B7355',
    width: '30%',
    marginHorizontal: 15,
  },
});

export default Detail;