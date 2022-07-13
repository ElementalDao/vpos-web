import { SET_BUYER_SOURCE, SET_DEV_MODE, SET_SELLER_ASK, SET_WALLET_ID } from '../actions/types'

const initialState: any = {
  buyerSource: {symbol: 'AVAX', contract: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'},
  sellerAsk: {symbol: 'USDT', contract: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'},
  walletId: null,
  devMode: false,
};

export default function componentsReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_BUYER_SOURCE:
      return {
        ...state,
        buyerSource: action.payload
      };
    case SET_SELLER_ASK:
      return {
        ...state,
        sellerAsk: action.payload
      };
    case SET_WALLET_ID:
      return {
        ...state,
        walletId: action.payload
      };
    case SET_DEV_MODE:
      return {
        ...state,
        devMode: action.payload
      };
    default:
      return state;
  }
}
