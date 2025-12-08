import { Pressable, StyleSheet, Text, TextInput, TextInputKeyPressEvent, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';

import { useItemService } from '../../item/useItemService';
import { useState } from 'react';

export function AddItem() {
  const navigation = useNavigation();

  const { saveItem } = useItemService();

  const [name, setName] = useState<string>('');
  const [expired, setExpired] = useState<boolean>(false);

  function handleSave() {
    saveItem({ name, expired });
    navigation.pop();
  }

  function handleNameChange(value: string) {
    setName(value);
  }

  function handleExpiredChange(value: boolean) {
    setExpired(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Item"
            placeholderTextColor="#ccc"
            onChangeText={handleNameChange}
          />
        </View>
        <View style={styles.checkboxInputView}>
          <Checkbox color="#007aff" value={expired} onValueChange={handleExpiredChange} />
          <Text style={styles.inputText}>Expired</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Item</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentView: {
    backgroundColor: '#fff',
    padding: 15,
  },
  inputText: {},
  inputView: {
    marginBottom: 10,
  },
  checkboxInputView: {
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    backgroundColor: '#eee',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    marginTop: 10,
  },
  bottomView: {
    backgroundColor: '#fff',
    padding: 15,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
