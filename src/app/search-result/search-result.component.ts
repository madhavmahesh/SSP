import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalFields } from '../portalfields';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <table class="table">
      <tr>
      <td scope="row">{{ portalFields.SSN}}</td>
      <td scope="row">{{ portalFields.Participant }}</td>
      <td scope="row">{{ portalFields.LoanEliginility }}</td>
      <td scope="row">{{ portalFields.WithdrawalEliginility }}</td>
  </tr>
    </table>
  `,
  styleUrls: ['./search-result.component.css'],
})

export class SearchResultComponent {

  @Input() portalFields!: PortalFields;

}
