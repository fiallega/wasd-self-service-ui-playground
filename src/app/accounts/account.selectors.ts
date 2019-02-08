import {createSelector} from '@ngrx/store';
import * as _ from 'lodash';

export const selectAccountState = state => state.account;

export const accountNumberSelected = createSelector(
  selectAccountState,
  account => account.accountSelected
);


export const accountSelected = createSelector(
  selectAccountState,
  account => _.find(account.accounts, {'accountNumber': account.accountSelected} )

);

export const accounts = createSelector(
  selectAccountState,
  account => account.accounts
);
