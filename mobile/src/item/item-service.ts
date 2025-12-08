import { Item } from './item';

class ItemService {
  private items: Item[] = [];
  private currentId: number = -1;

  getTotalItems(): number {
    return this.items.length;
  }

  getTotalExpired(): number {
    return this.items.filter(item => item.expired).length;
  }

  getAll(): Item[] {
    return [...this.items];
  }

  save(item: Item): Item {
    if (!item.id) {
      this.currentId = this.currentId + 1;
      item.id = this.currentId;
      this.items.push(item);
    } else {
      const existingItem = this.items.filter((item) => item.id === item.id);
      console.log(existingItem);
    }
    console.log(this.items);
    return item;
  }

  remove(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

export const itemService = new ItemService();
