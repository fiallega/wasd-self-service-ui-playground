import {createSelector} from '@ngrx/store';


export const selectAccountState = state => state.account;

export const accountSelected = createSelector(
  selectAccountState,
  account => account.accountSelected
);

export const accounts = createSelector(
  selectAccountState,
  account => account.accounts
);
