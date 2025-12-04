import strawberry
from database.engine import transactional
from shared.graphql_type import DeletedType
from .inputs import CreateFridgeItemInput
from .types import FridgeItemType
from .models import FridgeItem


def create_fridge_item(input: CreateFridgeItemInput) -> FridgeItemType:
    with transactional() as session:
        fridge_item = FridgeItem(name=input.name, qty=input.qty)
        session.add(fridge_item)
        session.flush()
        return FridgeItemType.from_orm(fridge_item)


def delete_fridge_item(id: int) -> DeletedType:
    with transactional() as session:
        fridge_item = session.query(FridgeItem).get(id)
        if not fridge_item:
            return DeletedType(
                success=False,
                message=f'FridgeItem {id} not found',
            )
        
        name = fridge_item.name
        session.delete(fridge_item)

        return DeletedType(
            success=True,
            message=f"Successfully deleted {name}",
            deleted_id=id,
        )
