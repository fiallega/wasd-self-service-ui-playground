import {AccountActions, AccountActionTypes} from './account.actions';
import * as _ from 'lodash';

export interface AccountState {
  accounts: Array<Object>;
  accountSelected: string;
}

export const initialState: AccountState = {
  accounts: [
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
        "id":"8794640515"
      },
      "accountType":"NORMAL",
      "accountNumber":"0213756033",
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
  ],
  accountSelected: "0213756033"


};


export function reducer(state = initialState, action: AccountActions): AccountState {
  switch (action.type) {

    case AccountActionTypes.SelectAccountAction:
      let newState = _.clone(state);
      newState.accountSelected = action.accountNumber;
      return newState;

    default:
      return state;
  }
}
