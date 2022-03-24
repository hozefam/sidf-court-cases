import {
  IgxButtonModule,
  IgxComboModule,
  IgxDividerModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxRadioModule,
  IgxRippleModule,
  IgxSimpleComboModule,
  IgxToggleModule,
} from 'igniteui-angular';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxNavbarModule,
    IgxDividerModule,
    IgxRadioModule,
    IgxInputGroupModule,
    IgxSimpleComboModule,
    IgxComboModule,
  ],
  exports: [
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxNavbarModule,
    IgxDividerModule,
    IgxRadioModule,
    IgxInputGroupModule,
    IgxSimpleComboModule,
    IgxComboModule,
  ],
})
export class IgxModule {}
