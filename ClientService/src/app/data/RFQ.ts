export type RFQ={
    externalReference:String,
    description:String,
    distributionChannelCode:String,
    currencyCode:String,
    salesUnitPartyID:String,
    buyerPartyID:String,
    items:item[]
}

export type item={
    ID?:String,
    ExternalItemID?:String,
    ProcessingTypeCode?:String,
    ProductID:String,
    ItemScheduleLine:itemScheduleLine[]
}

type itemScheduleLine={
    Quantity:String,
    unitCode:String,
    StartDateTime?:String
}
export interface rfq{
  id:number;
  status:string;
  date:string;
  netAmount:number;
}
export interface rfqDetail{
  customerName:string;
  description:string;
  externalReference:string;
  items:rfqItem[];
}
export interface rfqItem{
  id: number;
  productID:String;
  description: string;
  quantity: number;
  unitOfMeasurment: string;
  deliveryDate: string;
  unitOfMeasurmentCode:string
}
