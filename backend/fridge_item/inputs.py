import strawberry
from typing import Optional


@strawberry.input
class CreateFridgeItemInput:
    name: str
    qty: int


@strawberry.input
class UpdateFridgeItemInput:
    id: int
    name: Optional[str] = strawberry.UNSET
    qty: Optional[int] = strawberry.UNSET
