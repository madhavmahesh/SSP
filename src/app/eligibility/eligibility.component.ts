import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from '../search-result/search-result.component';
import { PortalFields } from '../portalfields';
import { PortalService } from '../portal.service';

@Component({
  selector: 'app-eligibility',
  standalone: true,
  imports: [
    CommonModule,
    SearchResultComponent
  ],
  template: `
    <section>
      <form>
        Enter SSN: <input type="text" placeholder="SSN" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Fetch Data</button>
      </form>
    </section>
    <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">SSN</th>
        <th scope="col">Participant#</th>
        <th scope="col">Loan Eliginility</th>
        <th scope="col">Withdrawal Eliginility</th>
      </tr>
    </thead>
    </table>
    <app-search-result
        *ngFor="let portalFields of filteredLocationList"
        [portalFields]="portalFields">
      </app-search-result>
  `,
  styleUrls: ['./eligibility.component.css'],
})

export class EligibilityComponent {
  portalFieldsList: PortalFields[] = [];
  portalFields: PortalService = inject(PortalService);
  filteredLocationList: PortalFields[] = [];
  constructor() {
    this.portalFieldsList = this.portalFields.getAllPortalFields();
    this.filteredLocationList = this.portalFieldsList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.portalFieldsList;
      return;
    }

    this.filteredLocationList = this.portalFieldsList.filter(
      portalFields => portalFields?.SSN.toLowerCase().includes(text.toLowerCase())
    );
  }
}
