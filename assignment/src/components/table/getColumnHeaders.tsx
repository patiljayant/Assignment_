export interface TransactionKeys {
    transactionId: string;
    createdAt: string;
    destinationAmount: string;
    destinationCurrency: string;
    originAmount: string;
    originCurrency: string;
    destinationUserId: string;
    originUserId: string;
    type: string;
    status: string;
}
export const transaction : TransactionKeys = {
    transactionId: "Transaction Id",
    createdAt: "createdAt",
    destinationAmount: "Destination Amount",
    destinationCurrency: "Destination Currency",
    originAmount: "Origin Amount",
    originCurrency: "Origin Currency",
    destinationUserId: "Destination UserId",
    originUserId: "OriginUser Id",
    type: "Type",
    status: "Status"
}
interface SortFields {
    transactionId: string;
    createdAt: string;
    destinationAmount: string;
    originAmount: string;
    destinationUserId: string;
    originUserId: string;
}
export const sortingFields : SortFields = {
    transactionId: "Transaction Id",
    createdAt: "createdAt",
    destinationAmount: "Destination Amount",
    originAmount: "Origin Amount",
    destinationUserId: "Destination UserId",
    originUserId: "OriginUser Id"
}
export {}