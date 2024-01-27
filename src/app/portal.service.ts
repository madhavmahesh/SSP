import { Injectable } from '@angular/core';
import { PortalFields } from './portalfields';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  
  protected portalFieldsList: PortalFields[] = [
    {
      SSN: '32445455',
      Participant: '2334875',
      LoanEliginility: 'TRUE',
      WithdrawalEliginility: 'TRUE',
    },
    {
      SSN: '32445466',
      Participant: '2334312',
      LoanEliginility: 'FALSE',
      WithdrawalEliginility: 'TRUE',
    },
    {
      SSN: '32445432',
      Participant: '2334122',
      LoanEliginility: 'TRUE',
      WithdrawalEliginility: 'TRUE',
    },
    {
      SSN: '32445498',
      Participant: '2334111',
      LoanEliginility: 'FALSE',
      WithdrawalEliginility: 'TRUE',
    },
    {
      SSN: '32445422',
      Participant: '2334870',
      LoanEliginility: 'TRUE',
      WithdrawalEliginility: 'TRUE',
    },
    
  ];

  getAllPortalFields(): PortalFields[] {
    return this.portalFieldsList;
  }

}
