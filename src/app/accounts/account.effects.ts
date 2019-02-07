import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {AccountActionTypes, SelectAccount} from './account.actions';
import {defer, of} from 'rxjs';



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

  constructor(private actions$: Actions) {}

}
