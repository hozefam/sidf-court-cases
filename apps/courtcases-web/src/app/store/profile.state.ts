import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DeleteProfile, SetProfile } from './profile.actions';

import { Profile } from './../models/profile.model';

export class ProfileStateModel {
  profile: Profile | undefined;
  isLoggedIn = false;
}

@State<ProfileStateModel>({
  name: 'profile',
  defaults: {
    profile: undefined,
    isLoggedIn: false,
  },
})
export class ProfileState {
  constructor() {}

  @Selector()
  static getProfileDisplayName(state: ProfileStateModel) {
    return state.profile?.displayName;
  }

  @Selector()
  static getProfileJobTitle(state: ProfileStateModel) {
    return state.profile?.jobTitle;
  }

  @Selector()
  static isloggedIn(state: ProfileStateModel) {
    return state.profile !== undefined;
  }

  @Action(SetProfile)
  setProfile(
    { getState, setState }: StateContext<ProfileStateModel>,
    action: SetProfile
  ) {
    const state = getState();
    setState({
      ...state,
      profile: action.payload,
      isLoggedIn: action.payload !== undefined && action.payload !== null,
    });
  }

  @Action(DeleteProfile)
  deleteProfile({ getState, setState }: StateContext<ProfileStateModel>) {
    const state = getState();
    setState({ ...state, profile: undefined, isLoggedIn: false });
  }
}
