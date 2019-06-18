import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormReplicaComponent } from './components/forms/form-replica/form-replica.component';
import { DonationComponent } from './components/forms/donation/donation.component';
import { LoanComponent } from './components/forms/loan/loan.component';
import { ExhibitionComponent } from './components/forms/exhibition/exhibition.component';
import { ExchangeComponent } from './components/forms/exchange/exchange.component';
import { HomeReplicaComponent } from './components/home/home-replica/home-replica.component';
import { ReplicaComponent } from './components/elements/replica/replica.component';
import { FormEditReplicaComponent } from './components/forms/form-edit-replica/form-edit-replica.component';

export const ROUTES: Routes = [
    { path: 'home-replica', component: HomeReplicaComponent },
    { path: 'replica/:id', component: ReplicaComponent },
    { path: 'form-replica', component: FormReplicaComponent },
    { path: 'edit-replica/:id', component: FormEditReplicaComponent },
    { path: 'donacion', component: DonationComponent },
    { path: 'prestamo', component: LoanComponent },
    { path: 'exhibicion', component: ExhibitionComponent },
    { path: 'cange', component: ExchangeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'replica' }
];

