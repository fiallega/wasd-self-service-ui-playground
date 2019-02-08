import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {accountSelected} from '../account.selectors';

@Component({
  selector: 'wasd-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent implements OnInit {

  accountSelected$ : Observable<object>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.accountSelected$ = this.store.pipe(
      select(accountSelected)
    );

  }

}

