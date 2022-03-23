import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import {
  MsalGuard,
  MsalInterceptor,
  MsalModule,
  MsalRedirectComponent,
} from '@azure/msal-angular';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AzureAdAuthService } from './azure-ad-auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClientApplication } from '@azure/msal-browser/dist/app/ClientApplication';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgxModule } from './igx/igx.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PagesModule } from './pages/pages.module';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [MsalGuard],
  },
];

@NgModule({
  declarations: [AppComponent, DashboardComponent, NavbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    IgxModule,
    PagesModule,
    NgxsModule.forRoot(),
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: '283232e8-821a-459f-9e45-b4d9a98a0dc6', // This is your client ID
          authority:
            'https://login.microsoftonline.com/7af7a571-c081-4692-b992-3c086943cf40', // This is your tenant ID
          redirectUri: 'http://localhost:4200', // This is your redirect URI
        },
        cache: { cacheLocation: 'localStorage', storeAuthStateInCookie: isIE },
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read'],
        },
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/me', ['user.Read']],
        ]),
      }
    ),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
    MsalGuard,
    AzureAdAuthService,
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
