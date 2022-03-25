import { Component, OnInit } from '@angular/core';
import { PickerInteractionMode, RadioGroupAlignment } from 'igniteui-angular';

@Component({
  selector: 'sidf-create-hearing',
  templateUrl: './create-hearing.component.html',
  styleUrls: ['./create-hearing.component.css'],
})
export class CreateHearingComponent implements OnInit {
  mode: PickerInteractionMode = PickerInteractionMode.DropDown;
  format = 'hh:mm tt';
  date: Date = new Date();
  caseStatus = ['Notice period', '....'];

  public alignment = RadioGroupAlignment.horizontal;

  constructor() {}

  ngOnInit(): void {}
}
