import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { IgxIconService } from 'igniteui-angular';
import { Menu } from './../models/menu.model';
import { Observable } from 'rxjs';
import { ProfileState } from './../store/profile.state';
import { Router } from '@angular/router';
import { SetMenuSelection } from './../store/shared.actions';
import { SharedState } from './../store/shared.state';
import { legalDocument } from '@igniteui/material-icons-extended';

@Component({
  selector: 'sidf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public navItems: any[] = [];

  @Select(SharedState.selectedMenu) selectedMenu$: Observable<Menu> | undefined;

  @Select(ProfileState.isloggedIn) isLoggedIn$: Observable<boolean> | undefined;

  constructor(
    private iconService: IgxIconService,
    private router: Router,
    private store: Store
  ) {
    this.isLoggedIn$?.subscribe((loginStatus) => {
      if (loginStatus) {
        this.navItems = [
          { name: 'home', iconName: 'home', text: 'Overview', link: 'home' },
          {
            name: 'create',
            iconName: 'edit',
            text: 'Create Court Case',
            link: 'create',
          },
          {
            name: 'list',
            iconName: 'list',
            text: 'List of Court Cases',
            link: 'list',
          },
          {
            name: 'mycases',
            iconName: 'folder',
            text: 'My Cases',
            link: 'mycases',
          },
          {
            name: 'delegation',
            iconName: 'person',
            text: 'Manage Delegation',
            link: 'delegation',
          },
        ];
      } else {
        this.navItems = [
          { name: 'home', iconName: 'home', text: 'Overview', link: 'home' },
        ];
      }
    });
  }

  ngOnInit(): void {
    this.iconService.addSvgIconFromText(
      legalDocument.name,
      legalDocument.value,
      'imx-icons'
    );
  }

  public navigate(item: Menu) {
    this.store.dispatch(new SetMenuSelection(item));
    this.router.navigate([`/${item.link}`]);
  }
}
