import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AccountState} from '../account.reducer';
import {SelectAccount} from '../account.actions';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppState} from '../../reducers';


/**
 * AccountManager is the component to manage accounts
 * allowing the user to either select an enrolled account
 * or to nagivate to the enrolling and unenrolling process.
 */

@Component({
  selector: 'wasd-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css']
})
export class AccountManagerComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  accountSelected$: Observable<string>
  accounts$: Observable<Array<object>>

  ngOnInit() {

    this.accountSelected$ = this.store
      .pipe(
        map(state => state['account'].accountSelected)
      );

    this.accounts$ = this.store
      .pipe(
        map(state => state['account'].accounts)
      );

  }


  /**
   * selectAccount dispatches a SelectAccount Action
   * when the user selects an account
   * @param accountNumber
   */
  selectAccount(accountNumber: string) {
    this.store.dispatch(new SelectAccount(accountNumber))
  }

}
