import { Action } from '@ngrx/store';

export enum AccountActionTypes {
  LoadAccounts = '[Account] Load Accounts Action',
  
  
}

export class LoadAccounts implements Action {
  readonly type = AccountActionTypes.LoadAccounts;
}


export type AccountActions = LoadAccounts;
