import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, mergeMap, tap} from 'rxjs/operators';
import {AccountActionTypes, AllAccountsLoaded, AllAccountsRequested, SelectAccount} from './account.actions';
import {defer, of} from 'rxjs';
import {AccountState} from './account.reducer';



@Injectable()
export class AccountEffects {


  @Effect({dispatch:false})
  accountSelected$ = this.actions$.pipe(
    ofType<SelectAccount>(AccountActionTypes.SelectAccountAction),
    tap(value => console.log("The value is a side effect ", value))
  );

  @Effect()
  init$ = defer(() => {
    return of(new SelectAccount("0915192587"));
  });


  @Effect()
  loadAllAccounts$ = this.actions$.pipe(
    ofType<AllAccountsRequested>(AccountActionTypes.AllAccountsRequestedAction),
    mergeMap(() => of(accounts)),
    map(accounts => new AllAccountsLoaded({accounts}))
  );


  constructor(private actions$: Actions) {}

}



export const accounts: Array<object> = [
    {
      "accountStatus":"PENDING_STOP",
      "accountAddress":{
        "zip":"33133-1212",
        "country":"USA",
        "address2":null,
        "city":"SOUTH MIAMI",
        "address1":"1232 SW 83TH ST",
        "county":"MIAMI-DADE",
        "state":"FL"
      },
      "person":{
        "firstName":"JOHN",
        "lastName":"DELGADO",
        "id":"8794640666"
      },
      "accountType":"NORMAL",
      "accountNumber":"021375777",
      "premiseType":"DUPLEXW",
      "stopDate":"2019-02-01"
    },
    {
      "accountStatus":"ACTIVE",
      "business":{
        "entityName":"BRANDOM PARK INC",
        "id":"4475980994"
      },
      "accountAddress":{
        "zip":"33142-7111",
        "country":"USA",
        "address2":null,
        "city":"MIAMI",
        "address1":"6844 NW 123TH AVE",
        "county":null,
        "state":"FL"
      },
      "accountType":"NORMAL",
      "accountNumber":"0915192587",
      "premiseType":"LAUNDRY"
    },
    {
      "accountStatus":"ACTIVE",
      "accountAddress":{
        "zip":"33121-5229",
        "country":"USA",
        "address2":null,
        "city":"MIAMI",
        "address1":"921 SW 30TH ST",
        "county":null,
        "state":"FL"
      },
      "person":{
        "firstName":"SHAWN",
        "lastName":"ANGUSTOS",
        "id":"8272352502"
      },
      "accountType":"NORMAL",
      "accountNumber":"4312682543",
      "premiseType":"RES"
    }
  ];
