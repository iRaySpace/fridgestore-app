import { StyleSheet, View, Image, Text } from 'react-native';
import { Button } from '@react-navigation/elements';

export function EmptyItemState() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/no-stock.png')} />
      <Text style={styles.titleText}>No items found</Text>
      <Text style={styles.subtitleText}>It seems you don't have an item yet.</Text>
      <Button style={styles.ctaButton} screen="addItem">
        Add new item
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    borderRadius: 35,
    paddingBottom: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 21,
    marginTop: 10,
  },
  subtitleText: {
    color: '#777',
  },
  ctaButton: {
    marginTop: 15,
  },
});
