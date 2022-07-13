interface Source {
    symbol: String
    contract: String
}

export interface BuyerDialProps {
    source: Source,
    title: String,
    amount: Number,
    sourceEq: Number,
    ready: Boolean,
    setReady: Function
}

export interface BuyerQrConfirmProps {
    note?: String
    setReady: Function
    sourceEq: Number
    source: Source
    ask: String
    usd: Number
    adr: String
}