import strawberry
from typing import List
from datetime import datetime

from shared.graphql_type import UpdatedType
from .models import FridgeItem


@strawberry.type
class FridgeItemType:
    created_at: datetime
    updated_at: datetime
    id: int
    name: str
    qty: int
    @classmethod
    def from_orm(cls, data: FridgeItem):
        return cls(
            created_at=data.created_at,
            updated_at=data.updated_at,
            id=data.id,
            name=data.name,
            qty=data.qty,
        )

@strawberry.type
class UpdatedFridgeItemType(UpdatedType[FridgeItemType]):
    pass
