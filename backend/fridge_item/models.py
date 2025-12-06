from database.base import Base
from sqlalchemy import Column, Integer, String


class FridgeItem(Base):
    __tablename__ = "tab_FridgeItem"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    qty = Column(Integer, default=1)
