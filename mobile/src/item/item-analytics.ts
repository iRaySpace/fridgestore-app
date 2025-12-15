import { Item } from "./item";


export function computeAnalytics(items: Item[]) {
    const total = items.length;
    const expired = items.filter(item => item.expired).length;
    return { total, expired };
}

