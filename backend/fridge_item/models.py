from database.base import Base
from sqlalchemy import Column, Integer, String, Boolean


class FridgeItem(Base):
    __tablename__ = "tab_FridgeItem"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    expired = Column(Boolean, default=False)
