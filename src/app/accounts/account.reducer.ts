import { Action } from '@ngrx/store';


export interface AccountState {

}

export const initialState: AccountState = {
  accounts: [
    {
      "accountStatus":"PENDING_STOP",
      "accountAddress":{
        "zip":"33143-7917",
        "country":"USA",
        "address2":null,
        "city":"SOUTH MIAMI",
        "address1":"6534 SW 84TH ST",
        "county":"MIAMI-DADE",
        "state":"FL"
      },
      "person":{
        "firstName":"STEPHANIE",
        "lastName":"DELGADO",
        "id":"1794740517"
      },
      "accountType":"NORMAL",
      "accountNumber":"0218746055",
      "premiseType":"DUPLEXW",
      "stopDate":"2019-02-01"
    },
    {
      "accountStatus":"ACTIVE",
      "business":{
        "entityName":"BROADWAY PLACE INC",
        "id":"6475980993"
      },
      "accountAddress":{
        "zip":"33147-7469",
        "country":"USA",
        "address2":null,
        "city":"MIAMI",
        "address1":"6840 NW 18TH AVE",
        "county":null,
        "state":"FL"
      },
      "accountType":"NORMAL",
      "accountNumber":"0815092546",
      "premiseType":"LAUNDRY"
    },
    {
      "accountStatus":"ACTIVE",
      "accountAddress":{
        "zip":"33165-6229",
        "country":"USA",
        "address2":null,
        "city":"MIAMI",
        "address1":"10521 SW 50TH ST",
        "county":null,
        "state":"FL"
      },
      "person":{
        "firstName":"CRISTINE",
        "lastName":"GONZALEZ",
        "id":"9272352501"
      },
      "accountType":"NORMAL",
      "accountNumber":"2312882531",
      "premiseType":"RES"
    }
  ],
  accountSelected: 0


};

export function reducer(state = initialState, action: Action): AccountState {
  switch (action.type) {

    default:
      return state;
  }
}
