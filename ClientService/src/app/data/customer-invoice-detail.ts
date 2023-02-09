export interface Attachement
{
    title:string,
    document:string
}
export interface Customer
{
    name:String,//BuyerParty.BuyerPartyName[].FormattedName
    address:String,//BuyerParty.BuyerPartyFormattedAddress[].FormattedPostalAddressDescription
    currency:String,
    taxNumberType:String,
    taxNumber:Number

}
export interface Seller
{
    name:String,//InvolvedParty[RoleCodeText="Seller"].InvolvedPartyDisplayName.d.results[].FormattedName
    invoicingUnit:String,//
    address:String,//
    taxNumberType:String,
    taxNumber:Number
}
export interface TaxDetails
{
    type:string,
    rate:string,
    amount:Number
}
export interface Item
{
    productID:String,
    description:String,
    quantity:Number,
    UOM:String,
    listPrice:Number,
    discountAmount:Number,
    netAmount:Number,
    grossAmount:Number,
    taxDetails:TaxDetails
}
export interface CustomerInvoiceDetails
{
    ID:number,//ID
    type:String,//ProcessingTypeCodeText
    date:Date|String,//CreationDateTime
    status:String,//ReleaseStatusCodeText
    externalReference:String,//ReferenceBusinessTransactionDocumentID
    paymentMethod:String,
    paymentTerms:String,//CashDiscountTerms.PaymentTermsCodeText
    dueDate:Date|String,//CashDiscountTerms.FullPaymentEndDate
    notes:String,
    grossTotal:Number,//TotalGrossAmount
    totalDiscount:Number,
    totalTax:Number,//TotalTaxAmount
    netTotal:Number,//TotalNetAmount
    attachements:Attachement[],
    customer:Customer,
    items:Item[],
    seller:Seller,
}
