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

import { PiezaComponent } from './components/elements/pieza/pieza.component';
import { FormEditPiezaComponent } from './components/forms/form-edit-pieza/form-edit-pieza.component';
import { FormPiezaComponent } from './components/forms/form-pieza/form-pieza.component';
import { HomePiezaComponent } from './components/home/home-pieza/home-pieza.component';
import { HomeLoanComponent } from './components/home/home-loan/home-loan.component';
import { HomeMakealoanComponent } from './components/home/home-makealoan/home-makealoan.component';
import { HomeExhibitionComponent } from './components/home/home-exhibition/home-exhibition.component';
import { FormExhibitionComponent } from './components/forms/form-exhibition/form-exhibition.component';
import { FormLoanComponent } from './components/forms/form-loan/form-loan.component';
import { FormMakealoanComponent } from './components/forms/form-makealoan/form-makealoan.component';
import { LoanComponent } from './components/elements/loan/loan.component';
import { MakealoanComponent } from './components/elements/makealoan/makealoan.component';
import { ExhibitionComponent } from './components/elements/exhibition/exhibition.component';

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

    PiezaComponent,
    FormEditPiezaComponent,
    FormPiezaComponent,
    HomePiezaComponent,
    HomeLoanComponent,
    HomeMakealoanComponent,
    HomeExhibitionComponent,
    FormExhibitionComponent,
    FormLoanComponent,
    FormMakealoanComponent,
    LoanComponent,
    MakealoanComponent,
    ExhibitionComponent

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
