import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { ExhibitionComponent } from './components/forms/exhibition/exhibition.component';
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
import { HomeCanjeComponent } from './components/home/home-canje/home-canje.component';
import { HomeDonacionComponent } from './components/home/home-donacion/home-donacion.component';
import { CanjeComponent } from './components/elements/canje/canje.component';
import { FormCanjeComponent } from './components/forms/form-canje/form-canje.component';
import { FormDonacionComponent } from './components/forms/form-donacion/form-donacion.component';
import { DonacionComponent } from './components/elements/donacion/donacion.component';
import { FormEditDonacionComponent } from './components/forms/form-edit-donacion/form-edit-donacion.component';
import { FormEditCanjeComponent } from './components/forms/form-edit-canje/form-edit-canje.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReplicaComponent,
    ExhibitionComponent,
    LoanComponent,
    HomeComponent,
    HomeReplicaComponent,
    FormReplicaComponent,
    FormEditReplicaComponent,
    HomeCanjeComponent,
    HomeDonacionComponent,
    CanjeComponent,
    FormCanjeComponent,
    FormDonacionComponent,
    DonacionComponent,
    FormEditDonacionComponent,
    FormEditCanjeComponent
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
