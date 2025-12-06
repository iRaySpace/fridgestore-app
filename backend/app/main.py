from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
from database.engine import init_database
from app.graphql import schema

init_database()

app = FastAPI()
app.include_router(GraphQLRouter(schema, path="/"))
