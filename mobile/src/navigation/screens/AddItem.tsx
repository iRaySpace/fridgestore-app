import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { useItemService } from "../../item/useItemService";
import { useNavigation } from "@react-navigation/native";

export function AddItem() {
  const navigation = useNavigation();
  const { saveItem } = useItemService();

  function handleSave() {
    saveItem({
      name: 'Test',
      qty: 1,
    });
    navigation.pop();
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>Name</Text>
          <TextInput style={styles.input} placeholder='Item' placeholderTextColor='#ccc' />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}>Quantity</Text>
          <TextInput style={styles.input} placeholder='1.0' placeholderTextColor='#ccc' />
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