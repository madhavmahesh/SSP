import { Injectable } from '@angular/core';
import { FundsField } from './fundsfield';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  
  /** API CALL */
  /*
   constructor(private http: HttpClient) {}
   private apiUrl = 'https://your-api-endpoint/funds-fields';
 */  

  protected fundsFieldList: FundsField[] = [
    {
      IVR_PIN: '2345',
      SSN: '32445455',
      ZIP_CODE: '97006',
      BIRTH_DT: '1967-04-03',
    },
    {
      IVR_PIN: '1234',
      SSN: '32445455',
      ZIP_CODE: '97006',
      BIRTH_DT: '1967-04-03',
    },
    {
      IVR_PIN: '1235',
      SSN: '12321123',
      ZIP_CODE: '97006',
      BIRTH_DT: '1967-04-03',
    },
    {
      IVR_PIN: '5634',
      SSN: '45345434',
      ZIP_CODE: '97006',
      BIRTH_DT: '1967-04-03',
    },
    {
      IVR_PIN: '6234',
      SSN: '67867744',
      ZIP_CODE: '97006',
      BIRTH_DT: '1967-04-03',
    },
  ];

  getAllFundsField(): FundsField[] {
    return this.fundsFieldList;
  }
/** API CALL */
/*
  ngOnInit() {
    this.fundsService.getAllFundsField().subscribe(fundsFields => {
      this.fundsFieldList = fundsFields;
    });
  }

 getAllFundsField(): Observable<FundsField[]> {
  return this.http.get<FundsField[]>(this.apiUrl);
}
  
  */

}
