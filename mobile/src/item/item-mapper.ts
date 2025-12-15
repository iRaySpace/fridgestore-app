import { FridgeItemType } from "../__generated__/types";
import { Item } from './item';

function fromGraphql(fridgeItem: FridgeItemType): Item {
    return {
        id: fridgeItem.id,
        name: fridgeItem.name,
        expired: fridgeItem.expired,
    };
}

export default {
    fromGraphql
};