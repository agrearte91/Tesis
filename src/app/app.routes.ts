import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//homes
import { HomeReplicaComponent } from './components/home/home-replica/home-replica.component';
import { HomePiezaComponent } from './components/home/home-pieza/home-pieza.component';
import { HomeLoanComponent } from './components/home/home-loan/home-loan.component';
import { HomeMakealoanComponent } from './components/home/home-makealoan/home-makealoan.component';
import { HomeExhibitionComponent } from './components/home/home-exhibition/home-exhibition.component';

//forms
import { FormPiezaComponent } from './components/forms/form-pieza/form-pieza.component';
import { FormEditPiezaComponent} from './components/forms/form-edit-pieza/form-edit-pieza.component';
import { FormReplicaComponent } from './components/forms/form-replica/form-replica.component';

import { FormEditReplicaComponent } from './components/forms/form-edit-replica/form-edit-replica.component';

import { DonationComponent } from './components/forms/donation/donation.component';
import { FormLoanComponent } from './components/forms/form-loan/form-loan.component';
import { FormMakealoanComponent} from './components/forms/form-makealoan/form-makealoan.component';
import { FormExhibitionComponent } from './components/forms/form-exhibition/form-exhibition.component';
import { ExchangeComponent } from './components/forms/exchange/exchange.component';

//elements
import { ReplicaComponent } from './components/elements/replica/replica.component';
import { PiezaComponent } from './components/elements/pieza/pieza.component';
import { ExhibitionComponent } from './components/elements/exhibition/exhibition.component';
import { LoanComponent } from './components/elements/loan/loan.component';
import { MakealoanComponent } from './components/elements/makealoan/makealoan.component';


import { HomeDonacionComponent } from './components/home/home-donacion/home-donacion.component';
import { HomeCanjeComponent } from './components/home/home-canje/home-canje.component';
import { FormCanjeComponent } from './components/forms/form-canje/form-canje.component';
import { FormDonacionComponent } from './components/forms/form-donacion/form-donacion.component';


export const ROUTES: Routes = [
    //homes
    { path: 'home-replica', component: HomeReplicaComponent },
    { path: 'home-pieza', component: HomePiezaComponent },
    { path: 'home-loan', component: HomeLoanComponent },
    { path: 'home-makealoan', component: HomeMakealoanComponent },
    { path: 'home-exhibition', component: HomeExhibitionComponent },
    { path: 'home-donacion', component: HomeDonacionComponent },
    { path: 'home-canje', component: HomeCanjeComponent },

    //forms
    { path: 'form-replica', component: FormReplicaComponent }, 
    { path: 'form-pieza', component: FormPiezaComponent },
    { path: 'form-loan', component: FormLoanComponent },
    { path: 'form-exhibition', component: FormExhibitionComponent },
    { path: 'form-edit-pieza/:id', component: FormEditPiezaComponent },
    { path: 'form-makealoan', component: FormMakealoanComponent },
    { path: 'form-donacion', component: FormDonacionComponent },
    { path: 'form-canje', component: FormCanjeComponent },


    //element
    { path: 'replica/:id', component: ReplicaComponent },
    { path: 'pieza/:id', component: PiezaComponent },
    { path: 'exhibition', component: ExhibitionComponent },
    { path: 'loan', component: LoanComponent },
    { path: 'makealoan', component: MakealoanComponent },
    { path: 'replica/:unCodigo', component: ReplicaComponent },


    { path: 'edit-replica/:id', component: FormEditReplicaComponent },
    { path: 'donacion', component: DonationComponent },
    { path: 'cange', component: ExchangeComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'replica' }
    
];

