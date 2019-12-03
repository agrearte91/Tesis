import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormReplicaComponent } from './components/forms/form-replica/form-replica.component';
import { LoanComponent } from './components/forms/loan/loan.component';
import { ExhibitionComponent } from './components/forms/exhibition/exhibition.component';
import { HomeReplicaComponent } from './components/home/home-replica/home-replica.component';
import { ReplicaComponent } from './components/elements/replica/replica.component';
import { FormEditReplicaComponent } from './components/forms/form-edit-replica/form-edit-replica.component';
import { HomeDonacionComponent } from './components/home/home-donacion/home-donacion.component';
import { HomeCanjeComponent } from './components/home/home-canje/home-canje.component';
import { FormCanjeComponent } from './components/forms/form-canje/form-canje.component';
import { FormDonacionComponent } from './components/forms/form-donacion/form-donacion.component';

export const ROUTES: Routes = [
    //homes
    { path: 'home-replica', component: HomeReplicaComponent },
    { path: 'home-donacion', component: HomeDonacionComponent },
    { path: 'home-canje', component: HomeCanjeComponent },

    //forms
    { path: 'form-replica', component: FormReplicaComponent },
    { path: 'form-donacion', component: FormDonacionComponent },
    { path: 'form-canje', component: FormCanjeComponent },

    { path: 'replica/:unCodigo', component: ReplicaComponent },
   
    { path: 'edit-replica/:id', component: FormEditReplicaComponent },
    { path: 'prestamo', component: LoanComponent },
    { path: 'exhibicion', component: ExhibitionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'replica' }
];

