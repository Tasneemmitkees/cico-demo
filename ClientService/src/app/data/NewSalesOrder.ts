export interface NewSalesOrder {
    externalReference:String,
    salesUnitPartyID:String,
    buyerPartyID:String,
    currencyCode:String,
    distributionChannelCode: String,
    items:any[]
}

type Item=
{
    ID:String,
    itemProduct:ItemProduct,
    itemSchedulelines:ItemScheduleLine[]
}
type ItemProduct=
{
    productID:String
}
type ItemScheduleLine=
{
    quantity:String,
    unitCode:String
}
export interface OrderItem{
  productID:string;
  productDescription:string;
  requestedQuantity:string;
  unitOfMeasurment:string;
  price:string;
  netPrice:number;
  deliveryDate: string;
}
export interface Attachement{
  title:string;
  attachmentDoc:string;
}
