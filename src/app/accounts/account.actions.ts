import { Action } from '@ngrx/store';

export enum AccountActionTypes {
  AllAccountsLoadedAction = '[Accounts API] All Accounts Loaded Action',
  AllAccountsRequestedAction = '[Accounts Manager] All Accounts Requested Action',
  SelectAccountAction = '[Account] Select Account Action'
}

export class AllAccountsRequested implements Action {
  readonly type =  AccountActionTypes.AllAccountsRequestedAction;
}

export class AllAccountsLoaded implements Action {
  readonly type = AccountActionTypes.AllAccountsLoadedAction;

  constructor(public payload: {accounts: Array<any>} ) {}
}

export class SelectAccount implements Action {
  readonly type = AccountActionTypes.SelectAccountAction;

  constructor(public accountNumber: string){}
}

export type AccountActions =
  AllAccountsRequested
  | AllAccountsLoaded
  | SelectAccount


