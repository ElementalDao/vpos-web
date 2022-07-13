interface Ask {
    symbol: String,
    contract: String
}

export interface SellerDialProps {
    isOpen: boolean
    onClose: () => void
    note?: String
    adr: String,
    notes?: String,
    ask: Ask,
    usd: Number
}