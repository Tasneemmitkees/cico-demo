// import { Igeneralinfo, Iidentificationnumbers } from "./generalinfo";
// import {IAddress} from "./Address";
// import { contactInformation } from "./contactinfo";
// import {Ipayment} from "./payment";
// import { Iattachment } from "./attachment";
import{Address, Attachement, BankData, IdentificationNumbers} from '../../../src/app/data/Customer'

export interface IndividualCustomer {
  englishName: any;
  objectID:String,
  customerID:number;
  title:string;
  firstName:string;
  lastName:string;
  gender:string;
  dateOfBirth:string;
  status:string;
  age:number;
  nationality:string;
  customerType:string;
  identificationNumbers:IdentificationNumbers[];
  address:Address[];
  contact:ContactInformation[];
  bankData:BankData[];
  attachement:Attachement[];
}
export interface ContactInformation{
  phone:String;
  mobileNumber:String;
  email:string;
  preferredMethodOfCommunication:string;
}
