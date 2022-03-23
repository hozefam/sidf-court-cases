import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './models/profile.model';
import { Subject } from 'rxjs';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
const GRAPH_ENDPOINT_PIC = 'https://graph.microsoft.com/v1.0/me/photo/$value';

@Injectable({
  providedIn: 'root',
})
export class AzureAdAuthService {
  isUserLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {}

  getUserProfile() {
    return this.httpClient.get<Profile>(GRAPH_ENDPOINT);
  }

  getUserProfilePic() {
    return this.httpClient.get(GRAPH_ENDPOINT_PIC, {
      responseType: 'blob',
    });
  }
}
