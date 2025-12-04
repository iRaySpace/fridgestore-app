import strawberry
from typing import List
from shared.graphql_type import DeletedType
from fridge_item.query import get_fridge_items
from fridge_item.mutation import create_fridge_item, delete_fridge_item
from fridge_item.types import FridgeItemType


@strawberry.type
class Query:
    fridge_items: List[FridgeItemType] = strawberry.field(resolver=get_fridge_items)

@strawberry.type
class Mutation:
    create_fridge_item: FridgeItemType = strawberry.mutation(resolver=create_fridge_item)
    delete_fridge_item: DeletedType = strawberry.mutation(resolver=delete_fridge_item)

schema = strawberry.Schema(query=Query, mutation=Mutation)
