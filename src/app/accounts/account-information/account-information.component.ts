import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {AccountState} from '../account.reducer';

@Component({
  selector: 'wasd-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent implements OnInit {

  constructor(private store: Store<AccountState>) {
  }

  ngOnInit() {
  }

}
