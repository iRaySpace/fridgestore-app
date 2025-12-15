/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n        query GetFridgeItem($id: Int!) {\n            fridgeItem(id: $id) {\n                id\n                name\n                expired\n                daysInFridge\n                createdAt\n                updatedAt\n            }\n        }\n    ": typeof types.GetFridgeItemDocument,
    "\n        query GetFridgeItems {\n            fridgeItems {\n                id\n                name\n                expired\n                daysInFridge\n                createdAt\n                updatedAt\n            }\n        }\n    ": typeof types.GetFridgeItemsDocument,
    "\n        mutation CreateFridgeItem($input: CreateFridgeItemInput!) {\n            createFridgeItem(input: $input) {\n                success\n                errors\n                result {\n                    id\n                    name\n                    expired\n                }\n            }\n        }\n    ": typeof types.CreateFridgeItemDocument,
    "\n        mutation UpdateFridgeItem($input: UpdateFridgeItemInput!) {\n            updateFridgeItem(input: $input) {\n                success\n                errors\n                result {\n                    id\n                    name\n                    expired\n                }\n            }\n        }\n    ": typeof types.UpdateFridgeItemDocument,
};
const documents: Documents = {
    "\n        query GetFridgeItem($id: Int!) {\n            fridgeItem(id: $id) {\n                id\n                name\n                expired\n                daysInFridge\n                createdAt\n                updatedAt\n            }\n        }\n    ": types.GetFridgeItemDocument,
    "\n        query GetFridgeItems {\n            fridgeItems {\n                id\n                name\n                expired\n                daysInFridge\n                createdAt\n                updatedAt\n            }\n        }\n    ": types.GetFridgeItemsDocument,
    "\n        mutation CreateFridgeItem($input: CreateFridgeItemInput!) {\n            createFridgeItem(input: $input) {\n                success\n                errors\n                result {\n                    id\n                    name\n                    expired\n                }\n            }\n        }\n    ": types.CreateFridgeItemDocument,
    "\n        mutation UpdateFridgeItem($input: UpdateFridgeItemInput!) {\n            updateFridgeItem(input: $input) {\n                success\n                errors\n                result {\n                    id\n                    name\n                    expired\n                }\n            }\n        }\n    ": types.UpdateFridgeItemDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query GetFridgeItem($id: Int!) {\n            fridgeItem(id: $id) {\n                id\n                name\n                expired\n                daysInFridge\n                createdAt\n                updatedAt\n            }\n        }\n    "): (typeof documents)["\n        query GetFridgeItem($id: Int!) {\n            fridgeItem(id: $id) {\n                id\n                name\n                expired\n                daysInFridge\n                createdAt\n                updatedAt\n            }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query GetFridgeItems {\n            fridgeItems {\n                id\n                name\n                expired\n                daysInFridge\n                createdAt\n                updatedAt\n            }\n        }\n    "): (typeof documents)["\n        query GetFridgeItems {\n            fridgeItems {\n                id\n                name\n                expired\n                daysInFridge\n                createdAt\n                updatedAt\n            }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        mutation CreateFridgeItem($input: CreateFridgeItemInput!) {\n            createFridgeItem(input: $input) {\n                success\n                errors\n                result {\n                    id\n                    name\n                    expired\n                }\n            }\n        }\n    "): (typeof documents)["\n        mutation CreateFridgeItem($input: CreateFridgeItemInput!) {\n            createFridgeItem(input: $input) {\n                success\n                errors\n                result {\n                    id\n                    name\n                    expired\n                }\n            }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        mutation UpdateFridgeItem($input: UpdateFridgeItemInput!) {\n            updateFridgeItem(input: $input) {\n                success\n                errors\n                result {\n                    id\n                    name\n                    expired\n                }\n            }\n        }\n    "): (typeof documents)["\n        mutation UpdateFridgeItem($input: UpdateFridgeItemInput!) {\n            updateFridgeItem(input: $input) {\n                success\n                errors\n                result {\n                    id\n                    name\n                    expired\n                }\n            }\n        }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;