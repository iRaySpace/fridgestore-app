/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date with time (isoformat) */
  DateTime: { input: any; output: any; }
};

export type CreateFridgeItemInput = {
  expired: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type DeletedType = {
  __typename?: 'DeletedType';
  deletedId?: Maybe<Scalars['Int']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type FridgeItemType = {
  __typename?: 'FridgeItemType';
  createdAt: Scalars['DateTime']['output'];
  daysInFridge: Scalars['Int']['output'];
  expired: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFridgeItem: UpdatedFridgeItemType;
  deleteFridgeItem: DeletedType;
  updateFridgeItem: UpdatedFridgeItemType;
};


export type MutationCreateFridgeItemArgs = {
  input: CreateFridgeItemInput;
};


export type MutationDeleteFridgeItemArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateFridgeItemArgs = {
  input: UpdateFridgeItemInput;
};

export type Query = {
  __typename?: 'Query';
  fridgeItem: FridgeItemType;
  fridgeItems: Array<FridgeItemType>;
};


export type QueryFridgeItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFridgeItemsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export type UpdateFridgeItemInput = {
  expired?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatedFridgeItemType = {
  __typename?: 'UpdatedFridgeItemType';
  errors: Array<Scalars['String']['output']>;
  result?: Maybe<FridgeItemType>;
  success: Scalars['Boolean']['output'];
};

export type GetFridgeItemQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetFridgeItemQuery = { __typename?: 'Query', fridgeItem: { __typename?: 'FridgeItemType', id: number, name: string, expired: boolean, daysInFridge: number, createdAt: any, updatedAt: any } };

export type GetFridgeItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFridgeItemsQuery = { __typename?: 'Query', fridgeItems: Array<{ __typename?: 'FridgeItemType', id: number, name: string, expired: boolean, daysInFridge: number, createdAt: any, updatedAt: any }> };

export type CreateFridgeItemMutationVariables = Exact<{
  input: CreateFridgeItemInput;
}>;


export type CreateFridgeItemMutation = { __typename?: 'Mutation', createFridgeItem: { __typename?: 'UpdatedFridgeItemType', success: boolean, errors: Array<string>, result?: { __typename?: 'FridgeItemType', id: number, name: string, expired: boolean } | null } };

export type UpdateFridgeItemMutationVariables = Exact<{
  input: UpdateFridgeItemInput;
}>;


export type UpdateFridgeItemMutation = { __typename?: 'Mutation', updateFridgeItem: { __typename?: 'UpdatedFridgeItemType', success: boolean, errors: Array<string>, result?: { __typename?: 'FridgeItemType', id: number, name: string, expired: boolean } | null } };


export const GetFridgeItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFridgeItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fridgeItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"expired"}},{"kind":"Field","name":{"kind":"Name","value":"daysInFridge"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetFridgeItemQuery, GetFridgeItemQueryVariables>;
export const GetFridgeItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFridgeItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fridgeItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"expired"}},{"kind":"Field","name":{"kind":"Name","value":"daysInFridge"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetFridgeItemsQuery, GetFridgeItemsQueryVariables>;
export const CreateFridgeItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFridgeItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFridgeItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFridgeItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"expired"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFridgeItemMutation, CreateFridgeItemMutationVariables>;
export const UpdateFridgeItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFridgeItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFridgeItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFridgeItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"expired"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateFridgeItemMutation, UpdateFridgeItemMutationVariables>;