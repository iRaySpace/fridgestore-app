import { View, Text, StyleSheet } from 'react-native';

export interface ItemCardProps {
  name: string;
  expired: boolean;
}

export function ItemCard({ name, expired }: ItemCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      {expired ? (
        <Text style={styles.expiredText}>Expired</Text>
      ) : (
        <Text style={styles.goodText}>Good</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  nameText: {
    fontWeight: 'bold',
  },
  expiredText: {
    color: '#FF2D55',
  },
  goodText: {
    color: '#34C759',
  },
});
