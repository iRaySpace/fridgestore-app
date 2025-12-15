import strawberry
from typing import List
from database.engine import transactional
from shared.graphql_type import DeletedType
from .inputs import CreateFridgeItemInput, UpdateFridgeItemInput
from .types import FridgeItemType, UpdatedFridgeItemType
from .models import FridgeItem


def create_fridge_item(input: CreateFridgeItemInput) -> UpdatedFridgeItemType:
    errors = _validate_fields(strawberry.asdict(input))
    if errors:
        return UpdatedFridgeItemType(
            success=False,
            errors=errors,
            result=None,
        )

    with transactional() as session:
        fridge_item = FridgeItem(name=input.name, expired=input.expired)
        session.add(fridge_item)
        session.flush()
        return UpdatedFridgeItemType(
            success=True, result=FridgeItemType.from_orm(fridge_item), errors=[]
        )


def update_fridge_item(input: UpdateFridgeItemInput) -> UpdatedFridgeItemType:
    errors = _validate_fields(strawberry.asdict(input))
    if errors:
        return UpdatedFridgeItemType(
            success=False,
            errors=errors,
            result=None,
        )

    with transactional() as session:
        fridge_item = session.get(FridgeItem, input.id)
        if not fridge_item:
            return UpdatedFridgeItemType(
                success=False,
                errors=[f"FridgeItem {input.id} does not exist"],
                result=None,
            )

        fridge_item.name = input.name
        fridge_item.expired = input.expired
        session.flush()

        return UpdatedFridgeItemType(
            success=True,
            result=FridgeItemType.from_orm(fridge_item),
            errors=[],
        )


def delete_fridge_item(id: int) -> DeletedType:
    with transactional() as session:
        fridge_item = session.get(FridgeItem, id)
        if not fridge_item:
            return DeletedType(
                success=False,
                message=f"FridgeItem {id} not found",
            )

        name = fridge_item.name
        session.delete(fridge_item)

        return DeletedType(
            success=True,
            message=f"Successfully deleted {name}",
            deleted_id=id,
        )


def _validate_fields(data: dict) -> List[str]:
    errors = []

    name = data.get("name")
    if name is not None and not name.strip():
        errors.append("Name cannot be empty")

    return errors
