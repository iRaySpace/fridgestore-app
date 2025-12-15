import strawberry
from typing import List
from shared.graphql_type import DeletedType
from fridge_item.query import get_fridge_item, get_fridge_items
from fridge_item.mutation import (
    create_fridge_item,
    update_fridge_item,
    delete_fridge_item,
)
from fridge_item.types import FridgeItemType, UpdatedFridgeItemType


@strawberry.type
class Query:
    fridge_items: List[FridgeItemType] = strawberry.field(resolver=get_fridge_items)
    fridge_item: FridgeItemType = strawberry.field(resolver=get_fridge_item)

@strawberry.type
class Mutation:
    create_fridge_item: UpdatedFridgeItemType = strawberry.mutation(
        resolver=create_fridge_item
    )
    update_fridge_item: UpdatedFridgeItemType = strawberry.mutation(
        resolver=update_fridge_item
    )
    delete_fridge_item: DeletedType = strawberry.mutation(resolver=delete_fridge_item)


schema = strawberry.Schema(query=Query, mutation=Mutation)
