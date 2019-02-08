import {AccountActions, AccountActionTypes} from './account.actions';
import * as _ from 'lodash';

export interface AccountState {
  accounts: Array<any>;
  accountSelected: string;
}

export const initialState: AccountState = {
  accounts: undefined,
  accountSelected: undefined
};


export function accountReducer(state = initialState, action: AccountActions): AccountState {
  switch (action.type) {

    case AccountActionTypes.SelectAccountAction:
      let newState = _.clone(state);
      newState.accountSelected = action.accountNumber;
      return newState;

    case AccountActionTypes.AllAccountsLoadedAction:
      return {
        accountSelected: action.payload.accounts[0].accountNumber,
        accounts: action.payload.accounts
      };

    default:
      return state;
  }
}
