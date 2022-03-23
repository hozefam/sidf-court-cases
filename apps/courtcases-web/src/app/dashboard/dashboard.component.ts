import { Component, OnInit } from '@angular/core';

import { IgxIconService } from 'igniteui-angular';
import { Router } from '@angular/router';
import { legalDocument } from '@igniteui/material-icons-extended';

@Component({
  selector: 'sidf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public navItems = [
    { name: 'home', text: 'Overview', link: 'home' },
    { name: 'edit', text: 'Create Court Case', link: 'create' },
    { name: 'list', text: 'List of Court Cases', link: 'list' },
    { name: 'folder', text: 'My Cases', link: 'mycases' },
    { name: 'person', text: 'Manage Delegation', link: 'delegation' },
  ];

  public selected = 'Overview';

  constructor(private iconService: IgxIconService, private router: Router) {}

  ngOnInit(): void {
    this.iconService.addSvgIconFromText(
      legalDocument.name,
      legalDocument.value,
      'imx-icons'
    );
  }

  public navigate(item: { text: string; link: string }) {
    this.selected = item.text;
    this.router.navigate([`/${item.link}`]);
  }
}
