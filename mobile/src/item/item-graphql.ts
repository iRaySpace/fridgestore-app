import { gql } from "@apollo/client";

const graphql = {
    get: gql`
        query GetFridgeItem($id: Int!) {
            fridgeItem(id: $id) {
                id
                name
                expired
                daysInFridge
                createdAt
                updatedAt
            }
        }
    `,
    getAll: gql`
        query GetFridgeItems {
            fridgeItems {
                id
                name
                expired
                daysInFridge
                createdAt
                updatedAt
            }
        }
    `,
    create: gql`
        mutation CreateFridgeItem($input: CreateFridgeItemInput!) {
            createFridgeItem(input: $input) {
                success
                errors
                result {
                    id
                    name
                    expired
                }
            }
        }
    `,
    update: gql`
        mutation UpdateFridgeItem($input: UpdateFridgeItemInput!) {
            updateFridgeItem(input: $input) {
                success
                errors
                result {
                    id
                    name
                    expired
                }
            }
        }
    `,
};

export default graphql;