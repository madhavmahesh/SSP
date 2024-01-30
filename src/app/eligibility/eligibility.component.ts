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
    <div class="pagination">
      <button (click)="previousPage()" [disabled]="currentPage === 1">
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button (click)="nextPage()" [disabled]="currentPage === totalPages">
        Next
      </button>
    </div>

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
        *ngFor="let portalFields of pagedLocationList"
        [portalFields]="portalFields">
      </app-search-result>
  `,
  styleUrls: ['./eligibility.component.css'],
})

export class EligibilityComponent {

   // Pagination variables
   itemsPerPage = 3; // Set the number of items per page
   currentPage = 1;
   totalPages = 1;

  portalFieldsList: PortalFields[] = [];
  portalFields: PortalService = inject(PortalService);
  filteredLocationList: PortalFields[] = [];
  pagedLocationList: PortalFields[] | undefined;

  constructor() {
    this.portalFieldsList = this.portalFields.getAllPortalFields();
    this.filteredLocationList = this.portalFieldsList;
    this.updatePagedLocationList();
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.portalFieldsList;
      return;
    }
  else{
    this.filteredLocationList = this.portalFieldsList.filter(
      portalFields => portalFields?.SSN.toLowerCase().includes(text.toLowerCase())
    );
  }
  
    this.updatePagedLocationList();
  }

  private updatePagedLocationList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.pagedLocationList = this.filteredLocationList.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
    this.totalPages = Math.ceil(
      this.filteredLocationList.length / this.itemsPerPage
    );
    
    
  }

  // Pagination methods
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedLocationList();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedLocationList();
    }
  }
}
