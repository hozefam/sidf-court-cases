import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { AzureAdAuthService } from './../azure-ad-auth.service';
import { Profile } from './../models/profile.model';

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

  profile?: Profile;
  // profilePic?: SafeResourceUrl;

  constructor(
    private azureAdAuthService: AzureAdAuthService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.azureAdAuthService.isUserLoggedIn.subscribe((x) => {
      this.isUserLoggedIn = x;

      if (this.isUserLoggedIn) {
        this.getProfile();
        // this.getProfilePic();
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
      this.profile = profileInfo;
    });
  }

  // getProfilePic() {
  //   this.azureAdAuthService.getUserProfilePic().subscribe((response) => {
  //     const urlCreator = window.URL || window.webkitURL;
  //     this.profilePic = this.domSanitizer.bypassSecurityTrustResourceUrl(
  //       urlCreator.createObjectURL(response)
  //     );
  //   });
  // }
}
