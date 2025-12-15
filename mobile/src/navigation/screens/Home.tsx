import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useQuery } from '@apollo/client/react';

import { EmptyItemState } from '../../components/EmptyItemState';
import { Analytics } from '../../components/Analytics';
import { ItemCard } from '../../components/ItemCard';
import { Loading } from '../../components/Loading';

import { Item } from '../../item/item';
import graphql from '../../item/item-graphql';
import itemMapper from '../../item/item-mapper';
import { computeAnalytics } from '../../item/item-analytics';
import { Query } from '../../__generated__/types';

export function Home() {
  const navigation = useNavigation();

  const { loading, data, refetch } = useQuery<Query>(graphql.getAll);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  function handleAddItem() {
    navigation.push('addItem');
  }

  function handleEditItem(item: Item) {
    navigation.push('editItem', { itemId: item.id });
  }

  // Mapping
  const itemData: Item[] = data?.fridgeItems.map(itemMapper.fromGraphql) ?? [];
  const { total, expired } = computeAnalytics(itemData);

  return (
    <View style={styles.container}>
      <Loading value={loading}>
        {!itemData.length ? (
          <EmptyItemState />
        ) : (
          <>
            <Text style={styles.welcomeText}>Welcome, Ivan!</Text>
            <Analytics
              totalItems={total}
              totalExpired={expired}
            />
            <View style={styles.itemView}>
              <Text style={styles.itemText}>Items</Text>
              <Pressable onPress={handleAddItem}>
                <Text style={styles.addItemText}>Add Item</Text>
              </Pressable>
            </View>
            <FlatList
              data={itemData}
              contentContainerStyle={styles.itemList}
              renderItem={({ item }) => (
                <Pressable onPress={() => handleEditItem(item)}>
                  <ItemCard name={item.name} expired={item.expired} />
                </Pressable>
              )}
            />
          </>
        )}
      </Loading>
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
