import { SET_BUYER_SOURCE, SET_DEV_MODE, SET_SELLER_ASK, SET_WALLET_ID } from "./types";


export function setBuyerSource(p: Object) {
    return {
      type: SET_BUYER_SOURCE,
      payload: p
    };
  };


export function setSellerAsk(p: Object) {
    return {
      type: SET_SELLER_ASK,
      payload: p
    };
  };

export function setWalletId(p: Object) {
    return {
      type: SET_WALLET_ID,
      payload: p
    };
  };

  export function setDevMode(p: Object) {
    return {
      type: SET_DEV_MODE,
      payload: p
    };
  };
