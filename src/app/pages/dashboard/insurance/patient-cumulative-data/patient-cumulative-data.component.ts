import { Component } from '@angular/core';

@Component({
  selector: 'ngx-patient-cumulative-data',
  styleUrls: ['./patient-cumulative-data.component.scss'],
  templateUrl: './patient-cumulative-data.component.html',
})
export class PatientCumulativeDataComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
