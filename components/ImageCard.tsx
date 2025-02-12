import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ImageCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ImageCard</Text>
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://media.istockphoto.com/id/635758088/tr/foto%C4%9Fraf/sunrise-at-the-eiffel-tower-in-paris-along-the-seine.jpg?s=2048x2048&w=is&k=20&c=r8gnWfq8NEq4E6sqJ0fwMkzf5jiPLLJvKt3S0J341X0=',
          }}
        />
        <Text style={styles.text}>Beautiful Paris View</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: '#333', // Background for the card
    borderRadius: 10, // Rounded corners for the whole card
    overflow: 'hidden', // Clips child elements inside the borderRadius
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 420,
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 300,
  },
  text: {
    color: '#FFFFFF',
    padding: 10,
    fontSize: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ImageCard;
