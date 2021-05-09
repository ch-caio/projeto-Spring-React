import { type } from "node:os"

export type SaleSum = {
    sallerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}