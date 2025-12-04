import strawberry


@strawberry.input
class CreateFridgeItemInput:
    name: str
    qty: int
