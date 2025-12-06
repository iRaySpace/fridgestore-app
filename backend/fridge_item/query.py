import strawberry
from typing import List
from sqlalchemy import select
from database.engine import transactional
from .types import FridgeItemType
from .models import FridgeItem


def get_fridge_items(limit: int = 10, offset: int = 0) -> List[FridgeItemType]:
    with transactional() as session:
        stmt = select(FridgeItem).limit(limit).offset(offset)
        data = session.execute(stmt).scalars().all()
        return [FridgeItemType.from_orm(d) for d in data]
