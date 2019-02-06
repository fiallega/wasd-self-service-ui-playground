import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AccountState} from '../account.reducer';
import {SelectAccount} from '../account.actions';

@Component({
  selector: 'wasd-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css']
})
export class AccountManagerComponent implements OnInit {

  constructor(private store: Store<AccountState>) { }

  ngOnInit() {
  }

  selectAccount(accountNumber: string) {
    this.store.dispatch(new SelectAccount(accountNumber))
  }

}
