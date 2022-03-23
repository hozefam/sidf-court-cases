import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../common/page-not-found/page-not-found.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, PagesRoutingModule],
  exports: [],
})
export class PagesModule {}
