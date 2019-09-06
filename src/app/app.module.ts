import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { ExhibitionComponent } from './components/forms/exhibition/exhibition.component';
import { ExchangeComponent } from './components/forms/exchange/exchange.component';
import { DonationComponent } from './components/forms/donation/donation.component';
import { LoanComponent } from './components/forms/loan/loan.component';
import { HomeComponent } from './components/home/home.component';
import { DataTablesModule } from 'angular-datatables';

//Rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { HomeReplicaComponent } from './components/home/home-replica/home-replica.component';
import { FormReplicaComponent } from './components/forms/form-replica/form-replica.component';
import { ReplicaComponent } from './components/elements/replica/replica.component';
import { FormEditReplicaComponent } from './components/forms/form-edit-replica/form-edit-replica.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReplicaComponent,
    ExhibitionComponent,
    ExchangeComponent,
    DonationComponent,
    LoanComponent,
    HomeComponent,
    HomeReplicaComponent,
    FormReplicaComponent,
    FormEditReplicaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    RouterModule.forRoot(ROUTES, {useHash:true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
