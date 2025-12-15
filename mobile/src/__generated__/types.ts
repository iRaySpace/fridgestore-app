export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
