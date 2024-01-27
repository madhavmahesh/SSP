import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundsResultComponent } from '../funds-result/funds-result.component';
import { FundsField } from '../fundsfield';
import { FundsService } from '../funds.service';

@Component({
  selector: 'app-eligibility',
  standalone: true,
  imports: [
    CommonModule,
    FundsResultComponent
  ],
  template: `
    <section>
      <form>
       <div class="row">
       <div class="col-md-4">
        Scenario: 
        <select #scenario>
          <option *ngFor="let option of filterOptions" [value]="option">{{ option }} </option>
        </select>
      </div>
      <div class="col-md-4">
              No of Plan(s): <input type="text" placeholder="" #plans>
      </div>
      <div class="col-md-4">
              No of Fund(s): <input type="text" placeholder="" #funds>
              <button class="primary" type="button" (click)="filterResults(plans.value,funds.value, scenario.value)">Fetch Data</button>
      </div>
       </div>
     
      </form>
      <br>
    </section>
    <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">SSN</th>
        <th scope="col">IVR</th>
        <th scope="col">ZIP CODE</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
    </table>
    <app-funds-result
        *ngFor="let fundsField of filteredLocationList"
        [fundsField]="fundsField">
      </app-funds-result>
  `,
  styleUrls: ['./funds.component.css'],
})

export class FundsComponent {
  fundsFieldList: FundsField[] = [];
  fundsField: FundsService = inject(FundsService);
  filteredLocationList: FundsField[] = [];
  filterOptions: string[] = ['PLAN ONLY', 'PLAN & FUND', 'PLAN & LOAN', 'PRE-TAX (AUTO ENROLL ACTIVE)', 'ROTH (AUTO ENROLL ACTIVE)', 'PRE-TAX & ROTH (AUTO ENROLL ACTIVE)'];
  selectedFilter = 'PLAN ONLY';
  constructor() {
    this.fundsFieldList = this.fundsField.getAllFundsField();
    this.filteredLocationList = this.fundsFieldList;
  }
 
  filterResults(planVal: string, fundsVal: string, scenarioVal: string) {
    
    if (!planVal) {
      this.filteredLocationList = this.fundsFieldList;
      return;
    }

    this.filteredLocationList = this.fundsFieldList.filter(
      fundsField => fundsField?.SSN.toLowerCase().includes(planVal.toLowerCase())
    );
  }
}
