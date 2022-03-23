import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { DelegationComponent } from './components/delegation/delegation.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { MsalGuard } from '@azure/msal-angular';
import { MycasesComponent } from './components/mycases/mycases.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './../common/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent, canActivate: [MsalGuard] },
  { path: 'list', component: ListComponent, canActivate: [MsalGuard] },
  { path: 'mycases', component: MycasesComponent, canActivate: [MsalGuard] },
  {
    path: 'delegation',
    component: DelegationComponent,
    canActivate: [MsalGuard],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
