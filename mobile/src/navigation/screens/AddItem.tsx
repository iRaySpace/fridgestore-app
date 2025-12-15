import { useNavigation } from '@react-navigation/native';

import { useState } from 'react';
import { MaybeMasked } from '@apollo/client';
import { useMutation } from '@apollo/client/react';

import { CreateFridgeItemInput, Mutation } from '../../__generated__/types';
import graphql from '../../item/item-graphql';
import { ItemForm } from '../../components/ItemForm';
import { Item } from '../../item/item';

export function AddItem() {
  const navigation = useNavigation();
  const [addItem, { loading }] = useMutation(graphql.create);
  const [errors, setErrors] = useState<string[]>([]);

  function handleCompleted(data: MaybeMasked<Mutation>) {
    const { createFridgeItem } = data;
    if (!createFridgeItem.success) {
      setErrors(createFridgeItem.errors);
      return;
    }
    navigation.pop();
  }

  async function handleSave(item: Item) {
    try {
      const input: CreateFridgeItemInput = {
        name: item.name,
        expired: item.expired,
      };
      addItem({
        variables: { input },
        onCompleted: handleCompleted,
      });
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  }

  return <ItemForm onSubmit={handleSave} loading={loading} errors={errors} />;
}