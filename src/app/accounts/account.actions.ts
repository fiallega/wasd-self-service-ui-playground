import { Action } from '@ngrx/store';

export enum AccountActionTypes {
  LoadAccountsAction = '[Account] Load Accounts Action',
  SelectAccountAction = '[Account] Select Account Action'
  
}

export class LoadAccounts implements Action {
  readonly type = AccountActionTypes.LoadAccountsAction;
}


export class SelectAccount implements Action {
  readonly type = AccountActionTypes.SelectAccountAction;

  constructor(public accountNumber: string){}
}

export type AccountActions = LoadAccounts | SelectAccount;
