import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ReplicaComponent } from './components/forms/replica/replica.component';
import { ExhibitionComponent } from './components/forms/exhibition/exhibition.component';
import { ExchangeComponent } from './components/forms/exchange/exchange.component';
import { DonationComponent } from './components/forms/donation/donation.component';
import { LoanComponent } from './components/forms/loan/loan.component';
import { HomeComponent } from './components/home/home.component';

//Rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReplicaComponent,
    ExhibitionComponent,
    ExchangeComponent,
    DonationComponent,
    LoanComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
