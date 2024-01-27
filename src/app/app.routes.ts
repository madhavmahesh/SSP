import { Routes } from '@angular/router';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { FundsComponent } from './funds/funds.component';
export const routes: Routes = [
    {
        path: '',
        component: EligibilityComponent,
        title: 'Home page'
      },      
    {
        path: 'funds',
        component: FundsComponent,
        title: 'Funds page'
      },      
];
