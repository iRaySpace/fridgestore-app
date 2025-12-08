import { useState } from 'react';
import { itemService } from './item-service';
import { Item } from './item';

export function useItemService() {
  const [items, setItems] = useState(itemService.getAll());

  function refresh() {
    setItems(itemService.getAll());
  }

  function saveItem(item: Item) {
    itemService.save(item);
    refresh();
  }

  function removeItem(id: number) {
    itemService.remove(id);
    refresh();
  }

  return {
    items,
    refresh,
    saveItem,
    removeItem,
  };
}
