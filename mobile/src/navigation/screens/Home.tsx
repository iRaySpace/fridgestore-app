import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useItemService } from '../../item/useItemService';
import { EmptyItemState } from '../../components/EmptyItemState';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { Analytics } from '../../components/Analytics';
import { ItemCard } from '../../components/ItemCard';

export function Home() {
  const navigation = useNavigation();
  const { items, refresh } = useItemService();

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, []),
  );

  function handleAddItem() {
    navigation.push('addItem');
  }

  return (
    <View style={styles.container}>
      {!items.length ? (
        <EmptyItemState />
      ) : (
        <>
          <Text style={styles.welcomeText}>Welcome, Ivan!</Text>
          <Analytics />
          <View style={styles.itemView}>
            <Text style={styles.itemText}>Items</Text>
            <Pressable onPress={handleAddItem}>
              <Text style={styles.addItemText}>Add Item</Text>
            </Pressable>
          </View>
          <FlatList
            data={items}
            contentContainerStyle={styles.itemList}
            renderItem={({ item }) => <ItemCard name={item.name} expired={item.expired} />}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemView: {
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  addItemText: {
    color: '#007AFF',
  },
  itemList: {
    marginTop: 10,
    gap: 10,
  },
});
