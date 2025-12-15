import { Pressable, StyleSheet, Text, TextInput, TextInputKeyPressEvent, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { ErrorAlert } from './ErrorAlert';
import { useState } from 'react';
import { Item } from '../item/item';
import { Loading } from './Loading';

export interface ItemFormProps {
    initialData?: Item;
    onSubmit: (item: Item) => void;
    loading: boolean;
    errors: string[];
}

export function ItemForm({ initialData, onSubmit, loading, errors }: ItemFormProps) {
    const [name, setName] = useState(initialData?.name ?? '');
    const [expired, setExpired] = useState(initialData?.expired ?? false);

    function handleNameChange(value: string) {
        setName(value);
    }

    function handleExpiredChange(value: boolean) {
        setExpired(value);
    }

    function handleSave() {
        const data: Item = { name, expired };
        onSubmit(data);
    }

    return (
        <View style={styles.container}>
            <Loading value={loading}>
                <View>
                    <ErrorAlert errors={errors} />
                    <View style={styles.contentView}>
                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Item"
                                placeholderTextColor="#ccc"
                                defaultValue={initialData?.name ?? ''}
                                onChangeText={handleNameChange}
                            />
                        </View>
                        <View style={styles.checkboxInputView}>
                            <Checkbox
                                color="#007aff"
                                value={expired}
                                onValueChange={handleExpiredChange}
                            />
                            <Text style={styles.inputText}>Expired</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <Pressable style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save Item</Text>
                    </Pressable>
                </View>
            </Loading>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    contentView: {
        padding: 15,
        backgroundColor: '#fff',
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
