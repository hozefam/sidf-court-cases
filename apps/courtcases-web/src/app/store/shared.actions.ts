import { Menu } from './../models/menu.model';
export class SetMenuSelection {
  static readonly type = '[Shared] Set Menu Selection';
  constructor(public payload: Menu) {}
}
