export type SalesOrder = {
  id: string;
  status: string;
  accountId: string;
  accountName: string;
  postingDate: string;
  requestedDate: string;
  externalReference: string;
  totalNet:  string;
  totalGross:  string;
  totalCurrency: string;
  uuid: string;
};
export type SalesOrdersDetails = {
  id: string;
  status: string;
  // discription: string;
  externalRefrence: string;
  requstedDate: Date | String;
  notes: string;
  grossTotal: string;
  totalDiscountRate: string;
  totalDiscountAmount: string;
  totalTax: string;
  netTotal: string;
  items: SalesOrderItems[];
  attachment: SalesOrderAttachment[];
  customer: {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    contact: {
      name: string;
      phone: string;
      email: string;
    };
    currency: string;
  };
};
export type SalesOrderItems = {
  id: string;
  description: string;
  requestedQuantity: string;
  confirmedQuantity: string;
  unitOfMeasurmentCode: string;
  unitOfMeasurment: string;
  currency: string;
  listPrice: string;
  discountAmount: string;
  discountRate: string;
  netPrice: string;
  netValue: string;
  notes: string;
  reasonOfRejection: string;
  taxDetails: {
    taxType: string;
    taxRate: string;
    taxAmount: string;
  };
};
export type SalesOrderAttachment = {
  uuid: string;
  title: string;
  doc: string;
};
/*
ID
LifeCycleStatusCodeText
BuyerParty.PartyID
BuyerParty.BuyerPartyName[0].FormattedName
PostingDateTime
RequestedDate
ExternalReference
NetAmount
GrossAmount
NetAmountCurrencyCode
UUID
*/

/*
ID
LifeCycleStatusCodeText
Description
ExternalReference
PeriodTerms/StartDate  , Validity period 34
PeriodTerms/EndDate
ChanceOfSuccessPercent
CancellationReasonCodeText
Notes[0]/Text
GrossAmount
PriceAndTaxCalculation/PriceComponent/CalculatedAmount ,Item Discounts
PriceAndTaxCalculation/MainDiscount/CalculatedAmount
TaxAmount
NetAmount
AttachmentFolder/UUID
AttachmentFolder/Name
AttachmentFolder/Binary
BuyerParty/PartyID
BuyerParty/BuyerPartyName[0]/FormattedName
BuyerParty/BuyerPartyAddress[0]/FormattedPostalAddressDescription
BuyerParty/AddressSnapshot/FormattedNumberDescription
BuyerParty/AddressSnapshot/URI
BuyerParty/
BuyerParty/
BuyerParty/
*/
