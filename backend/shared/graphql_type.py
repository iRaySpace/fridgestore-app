import strawberry
from typing import Optional, List, TypeVar, Generic


T = TypeVar('T')

@strawberry.type
class DeletedType:
    success: bool
    message: str
    deleted_id: Optional[int] = None

@strawberry.type
class UpdatedType(Generic[T]):
    success: bool
    result: Optional[T] = None
    errors: List[str] = strawberry.field(default_factory=list)
