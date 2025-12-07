import { StyleSheet, Text, View } from 'react-native';
import { useItemService } from '../../item/useItemService';
import { EmptyItemState } from '../../components/EmptyItemState';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { Analytics } from '../../components/Analytics';

export function Home() {
  const { items, refresh } = useItemService();

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [])
  );

  return (
    <View style={styles.container}>
      {!items.length ? <EmptyItemState /> : (
        <>
          <Text style={styles.welcomeText}>Welcome, Ivan!</Text>
          <Analytics />
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
});
