import { Injectable } from '@angular/core';
import {Ipayment, Paymentlist} from '../../../data/payment';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

constructor() { }

delete(id:number){
  const i= Paymentlist.findIndex(e =>e.id === id);
  if (i !== -1)
  {
   Paymentlist.splice(i,1);
  }
 }

}
