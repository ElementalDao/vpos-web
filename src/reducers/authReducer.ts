import { act } from "react-dom/test-utils"
import { ACCOUNTS_CHANGED, ACCOUNTS_ERROR, ACCOUNTS_FETCHED, FETCHING_ACCOUNTS, INITIAL, FETCHING_LOCAL } from "../actions/types"

export const initialState: any = {
  isLoading: false,
  status: INITIAL,
  error: {},
  data: {},
  isHydrated: false
}

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCHING_LOCAL:
      return {
        ...state,
        data: action.payload,
        status: action.payload,
        isLoading: action.payload,
        error: action.payload,
        isHydrated: true
      }

    case FETCHING_ACCOUNTS:
      return {
        ...state,
        isLoading: true,
        status: FETCHING_ACCOUNTS,
      }

    case ACCOUNTS_FETCHED:
    case ACCOUNTS_CHANGED:
      return {
        ...state,
        isLoading: false,
        status: ACCOUNTS_FETCHED,
        data: action.payload,
        error: null,
        isHydrated: true
      }

    case ACCOUNTS_ERROR:
      return {
        ...state,
        isLoading: false,
        data: {},
        status: ACCOUNTS_ERROR,
        error: action.payload,
        isHydrated: false
      }

    default:
      return state
  }
}