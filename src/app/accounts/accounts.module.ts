import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountMetersComponent } from './account-meters/account-meters.component';
import { AccountHeaderComponent } from './account-header/account-header.component';


  @NgModule({
  declarations: [
    AccountManagerComponent,
    AccountInformationComponent,
    AccountSummaryComponent,
    AccountDetailsComponent,
    AccountMetersComponent,
    AccountHeaderComponent],
  exports: [
    AccountManagerComponent,
    AccountInformationComponent,
    AccountSummaryComponent,
    AccountDetailsComponent,
    AccountMetersComponent,
    AccountHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class AccountsModule { }
