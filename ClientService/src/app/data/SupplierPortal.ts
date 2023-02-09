export interface SupplierPortalProfile{
  identificationNumber:IdentificationNumbers[];
  address:Address[];
  contact:Contact[];
  bank:BankData[];
  attachment:Attachement[];
}
export interface ProductCatalog{
  id:number;
  validTo:string;
  validFrom:string;
  description:string;
}
export interface rfq{
  id:number;
  description:string;
  subDeadline:string;
  status:string;
}
export interface PurchaseOrder{
  id:number;
  status:string;
  expectedAcknowledgement:string;
  deliveryDate:string;
  netValue:number;
}
export interface IdentificationNumbers{
  country:string;
  numberType:string;
  numberID:number;
}
export interface Address {
  description:String,
  country:String,
  city:String,
}
export interface Contact{
  name:String,
  function:String,
  department:String,
  phone:Number,
}
export interface BankData{
  bankCountry:string;
  bankName:string;
  accountNumber:String;
}
export interface Attachement{
  objectID?:string;
  title:string;
  attachmentDoc?:string;
  type?:string
}
export interface NewInvoice{
  externalDocumentID:string;
  date:string;
  duedate:string;
  paymentTerm:string;
  orderID:string;
  items:invoiceItem[];
}
export interface invoiceItem{
  productID:String;
  description: string;
  quantity: number;
  unitOfMeasurment: string;
  listPrice: string;
  unitOfMeasurmentCode:string;
  netAmount: string;
}
export interface NewProduct{
  description:string;
  startDate:string;
  endDate:string;
  items:productItem[];
}
export interface productItem{
  productID:String;
  supplierProductID:String;
  description: string;
  unitOfMeasurment: string;
  attachment: string;
}
