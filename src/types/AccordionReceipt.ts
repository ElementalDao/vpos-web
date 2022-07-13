export interface Receipt {
    success: boolean,
    isBuy: boolean,
    tx: string,
    date: string,
    usdValue: number,
    from: string,
    to: string,
    gasFee: number,
    platformFee: number
}