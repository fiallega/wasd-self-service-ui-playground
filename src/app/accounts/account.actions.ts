import { Action } from '@ngrx/store';

export enum AccountActionTypes {
  LoadAccounts = '[Account] Load Accounts Action',
  SelectAccount = '[Account] Select Account Action'
  
}

export class LoadAccounts implements Action {
  readonly type = AccountActionTypes.LoadAccounts;
}


export class SelectAccount implements Action {
  readonly type = AccountActionTypes.SelectAccount;

  constructor(public accountNumber: string){}
}

export type AccountActions = LoadAccounts | SelectAccount;
