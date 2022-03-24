import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { DelegationComponent } from './components/delegation/delegation.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { IgxModule } from './../igx/igx.module';
import { ListComponent } from './components/list/list.component';
import { MycasesComponent } from './components/mycases/mycases.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../common/page-not-found/page-not-found.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    CreateComponent,
    DelegationComponent,
    MycasesComponent,
    ListComponent,
  ],
  imports: [CommonModule, IgxModule, PagesRoutingModule, FormsModule],
  exports: [IgxModule],
})
export class PagesModule {}
