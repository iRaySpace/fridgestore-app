import strawberry
from typing import Optional


@strawberry.type
class DeletedType:
    success: bool
    message: str
    deleted_id: Optional[int] = None
