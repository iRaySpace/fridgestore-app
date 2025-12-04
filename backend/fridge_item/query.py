import strawberry
from typing import List
from database.engine import transactional
from .types import FridgeItemType
from .models import FridgeItem


def get_fridge_items(limit: int = 10, offset: int = 0) -> List[FridgeItemType]:
    with transactional() as session:
        data = session.query(FridgeItem).limit(limit).offset(offset).all()
        return [FridgeItemType.from_orm(d) for d in data]
