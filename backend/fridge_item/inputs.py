import strawberry
from typing import Optional


@strawberry.input
class CreateFridgeItemInput:
    name: str
    expired: bool


@strawberry.input
class UpdateFridgeItemInput:
    id: int
    name: Optional[str] = strawberry.UNSET
    expired: Optional[bool] = strawberry.UNSET
