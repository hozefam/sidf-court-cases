import { Component, OnInit } from '@angular/core';

import { RadioGroupAlignment } from 'igniteui-angular';

@Component({
  selector: 'sidf-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  loans = ['40000001', '40000002', '40000003'];
  year = ['2021', '2022', '2023'];

  public alignment = RadioGroupAlignment.horizontal;

  constructor() {}

  ngOnInit(): void {}
}
