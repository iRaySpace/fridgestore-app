import { useState } from 'react';
import { itemService } from './item-service';
import { Item } from './item';

export function useItemService() {
  const [items, setItems] = useState(itemService.getAll());
  const [totalItems, setTotalItems] = useState(itemService.getTotalItems());
  const [totalExpired, setTotalExpired] = useState(itemService.getTotalExpired());

  function refresh() {
    setItems(itemService.getAll());
    setTotalItems(itemService.getTotalItems());
    setTotalExpired(itemService.getTotalExpired());
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
    totalItems,
    totalExpired,
    refresh,
    saveItem,
    removeItem,
  };
}
