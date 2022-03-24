import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { AzureAdAuthService } from './../azure-ad-auth.service';
import { Observable } from 'rxjs';
import { ProfileState } from './../store/profile.state';
import { SetProfile } from './../store/profile.actions';

@Component({
  selector: 'sidf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn = false;

  @Output()
  Login = new EventEmitter();

  @Output()
  Logout = new EventEmitter();

  @Select(ProfileState.getProfileDisplayName)
  displayName$!: Observable<string>;

  constructor(
    private azureAdAuthService: AzureAdAuthService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.azureAdAuthService.isUserLoggedIn.subscribe((x) => {
      this.isUserLoggedIn = x;

      if (this.isUserLoggedIn) {
        this.getProfile();
      }
    });
  }

  login() {
    this.Login.emit();
  }

  logout() {
    this.Logout.emit();
  }

  getProfile() {
    this.azureAdAuthService.getUserProfile().subscribe((profileInfo) => {
      this.store.dispatch(new SetProfile(profileInfo));
    });
  }
}
