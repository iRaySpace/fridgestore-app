import { Pressable, StyleSheet, Text, TextInput, TextInputKeyPressEvent, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';

import { useState } from 'react';
import { MaybeMasked } from '@apollo/client';
import { useMutation, useQuery } from '@apollo/client/react';

import { Loading } from '../../components/Loading';
import { ErrorAlert } from '../../components/ErrorAlert';

import graphql from '../../item/item-graphql';
import { CreateFridgeItemInput, Mutation, Query, UpdateFridgeItemInput } from '../../__generated__/types';
import { ItemForm } from '../../components/ItemForm';
import { Item } from '../../item/item';

export function EditItem({ route }) {
    const navigation = useNavigation();

    const { itemId } = route.params;

    const query = useQuery<Query>(graphql.get, { variables: { id: parseInt(itemId) } });
    const [editItem, mutation] = useMutation<Mutation>(graphql.update);
    const [errors, setErrors] = useState<string[]>([]);

    function handleCompleted(data: MaybeMasked<Mutation>) {
        const { updateFridgeItem } = data;
        if (!updateFridgeItem.success) {
            setErrors(updateFridgeItem.errors);
            return;
        }
        navigation.pop();
    }

    function handleSave(item: Item) {
        try {
            const input: UpdateFridgeItemInput = {
                id: itemId,
                name: item.name,
                expired: item.expired,
            };
            editItem({
                variables: { input },
                onCompleted: handleCompleted,
            });
        } catch (err) {
            console.error('Unexpected error:', err);
        }
    }

    const item = query.data?.fridgeItem ?? undefined;

    return (
        <ItemForm
            key={item ? item.id : -1}
            initialData={item}
            onSubmit={handleSave}
            loading={query.loading || mutation.loading}
            errors={errors}
        />
    );
}
