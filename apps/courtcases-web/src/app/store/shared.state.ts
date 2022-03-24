import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Menu } from './../models/menu.model';
import { SetMenuSelection } from './shared.actions';

export class SharedStateModel {
  selectedMenu: Menu | undefined;
}

@State<SharedStateModel>({
  name: 'shared',
  defaults: {
    selectedMenu: {
      name: 'home',
      iconName: 'home',
      text: 'Overview',
      link: 'home',
    },
  },
})
export class SharedState {
  constructor() {}

  @Selector()
  static selectedMenu(state: SharedStateModel) {
    return state.selectedMenu;
  }

  @Action(SetMenuSelection)
  setMenuSelection(
    { getState, setState }: StateContext<SharedStateModel>,
    payload: SetMenuSelection
  ) {
    const state = getState();
    setState({ ...state, selectedMenu: payload.payload });
  }
}
