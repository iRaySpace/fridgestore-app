from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter
from database.engine import init_database
from app.graphql import schema

init_database()

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_headers=['*'], allow_methods=['*'])
app.include_router(GraphQLRouter(schema, path="/"))
