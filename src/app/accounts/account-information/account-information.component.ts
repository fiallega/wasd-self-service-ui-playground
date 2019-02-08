import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {Observable} from 'rxjs';
import {accountSelected} from '../account.selectors';

@Component({
  selector: 'wasd-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent implements OnInit {

  accountSelected$ : Observable<object>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.accountSelected$ = this.store.pipe(
      select(accountSelected)
    );

  }

}
