import { Profile } from './../models/profile.model';

export class SetProfile {
  static readonly type = '[Profile] Set';
  constructor(public payload: Profile) {}
}

export class DeleteProfile {
  static readonly type = '[Profile] Delete';
}
