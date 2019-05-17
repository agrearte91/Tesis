import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReplicaComponent } from './components/forms/replica/replica.component';
import { DonationComponent } from './components/forms/donation/donation.component';
import { LoanComponent } from './components/forms/loan/loan.component';
import { ExhibitionComponent } from './components/forms/exhibition/exhibition.component';
import { ExchangeComponent } from './components/forms/exchange/exchange.component';

export const ROUTES: Routes = [
    { path: 'replica', component: ReplicaComponent },
    { path: 'donacion', component: DonationComponent },
    { path: 'prestamo', component: LoanComponent },
    { path: 'exhibicion', component: ExhibitionComponent },
    { path: 'cange', component: ExchangeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'replica' }
];

