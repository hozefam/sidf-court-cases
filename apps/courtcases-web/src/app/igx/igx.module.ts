import {
  IgxButtonModule,
  IgxComboModule,
  IgxDatePickerModule,
  IgxDividerModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxRadioModule,
  IgxRippleModule,
  IgxSimpleComboModule,
  IgxTimePickerModule,
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
    IgxDatePickerModule,
    IgxTimePickerModule,
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
    IgxDatePickerModule,
    IgxTimePickerModule,
  ],
})
export class IgxModule {}
