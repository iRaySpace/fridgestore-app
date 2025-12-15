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
    expired: bool

    @classmethod
    def from_orm(cls, data: FridgeItem):
        return cls(
            created_at=data.created_at,
            updated_at=data.updated_at,
            id=data.id,
            name=data.name,
            expired=data.expired,
        )

    @strawberry.field
    def days_in_fridge(self) -> int:
        delta = datetime.now() - self.created_at
        return delta.days

@strawberry.type
class UpdatedFridgeItemType(UpdatedType[FridgeItemType]):
    pass
