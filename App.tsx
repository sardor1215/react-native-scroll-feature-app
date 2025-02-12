import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ImageCard from './components/ImageCard';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Box Colors</Text>
      <View style={styles.boxContainer}>
        <Text style={[styles.card, styles.redCard]}>Red</Text>
        <Text style={[styles.card, styles.yellowCard]}>Yellow</Text>
        <Text style={[styles.card, styles.blueCard]}>Blue</Text>
        <Text style={[styles.card, styles.greenCard]}>Green</Text>
      </View>
      <Text style={styles.title}>Elevated Cards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.scrollContainer}>
          <Text style={styles.scrollCards}>Red</Text>
          <Text style={styles.scrollCards}>Yellow</Text>
          <Text style={styles.scrollCards}>Blue</Text>
          <Text style={styles.scrollCards}>Green</Text>
        </View>
      </ScrollView>

      <ImageCard />
      <ImageCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#000000',
  },
  scrollCards: {
    color: '#FFFFFF',
    backgroundColor: '#423234',
    marginEnd: 8,
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  card: {
    color: '#FFFFFF',
    backgroundColor: '#423234',
    marginEnd: 8,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  redCard: {
    backgroundColor: '#FF0000',
  },
  blueCard: {backgroundColor: '#0000FF', color: '#FFFFFF'},
  greenCard: {backgroundColor: '#008000', color: '#FFFFFF'},

  yellowCard: {backgroundColor: '#FFFF00', color: '#000000'},
  boxContainer: {
    marginTop: 8,
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  scrollContainer: {
    marginTop: 8,

    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'flex-start',
  },
  title: {color: '#FFFFFF', fontSize: 30, fontWeight: 'bold', marginLeft: 8},
});
