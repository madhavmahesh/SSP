import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundsField } from '../fundsfield';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-funds-result',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <table class="table">
      <tr>
      <td scope="row">{{ fundsField.SSN}}</td>
      <td scope="row">{{ fundsField.IVR_PIN }}</td>
      <td scope="row">{{ fundsField.ZIP_CODE }}</td>
      <td scope="row">{{ fundsField.BIRTH_DT }}</td>
  </tr>
    </table>
  `,
  styleUrls: ['./funds-result.component.css'],
})

export class FundsResultComponent {

  @Input() fundsField!: FundsField;

}
