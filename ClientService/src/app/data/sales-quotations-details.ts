export interface IsalesQuotesDetails{
  id: number;
  discription: string;
  externalRefrence: string;
  validFrom: string;
  validTo: string;
  chanceOfSuccess: string;
  reasonOfRejection: string;
  notes: string;
  grossTotal: number;
  netTotal: number;
  totalTax: number;
  totalDiscount:number;
  items: IsalesQuotesItems[];
  attachment:Iattachment[];
  customer:{
    id:number;
    name: string;
    address: string;
    phone: string;
    email: string;
    currency:string;
  }

}
export interface Iattachment{
  title:string;
  attachmentDocument:string;
}
export interface IsalesQuotesItems {
  id: number;
  productNumber:number;
  description: string;
  quantity: number;
  unitOfMeasurment: string;
  listPrice: number;
  discountRate: number;
  discountAmount: number;
  netPrice: number;
  netValue: number;
  deliveryDate:string
  taxDetails: {
      taxType: string;
      taxRate: string;
      taxAmount: number;
  };

}
// const salesDetailData:IsalesQuotesDetails[]=[
//  {
//     quotationNumber: 1,
//     description: "desc",
//     externalRefrence: "external",
//     validFrom: "12-12-2020",
//     validTo: "12-2-2-21",
//     chanceOfSuccess: "sucess",
//     reasonOfRejection: "reject",
//     notes: "note",
//     grossTotal: 122,
//     totalDiscount: 333,
//     totalTax: 444,
//     items: [{
//       id:1,
//       productNumber:1,
//       description:"desc",
//       quantity:1,
//       unitOfMeasurment:"unit",
//       listPrice:1,
//       discount:1,
//       discountAmount:1,
//       netPrice:1,
//       netValue:1,
//       taxDetails:{
//         taxType:"type",
//         taxRate:"rate",
//         taxAmount:1
//       }
//     },
//     // {
//     //   id:2,
//     //   productNumber:2,
//     //   description:"des2",
//     //   quantity:2,
//     //   unitOfMeasurment:"unit2",
//     //   listPrice:2,
//     //   discount:2,
//     //   discountAmount:2,
//     //   netPrice:2,
//     //   netValue:2,
//     //   taxDetails:{
//     //     taxType:"typ2",
//     //     taxRate:"rate2",
//     //     taxAmount:2
//     //   }
//     // }
//   ],
//     attachment: [
//       {
//         title:"title",
//         attachmentDocument:"attach"
//       },
//       {
//         title:"title2",
//         attachmentDocument:"attach2"
//       },
//     ],
//     customerInfo: {
//       id: 1,
//       customerName: "name",
//       address: "cairo",
//       phone: "1234",
//       email: "email@gmail.com",
//       currency: "currency"
//     }
//   },
//   // {
//   //   quotationNumber: 2,
//   //   description: "desc",
//   //   externalRefrence: "external",
//   //   validFrom: "12-12-2020",
//   //   validTo: "12-2-2-21",
//   //   chanceOfSuccess: "sucess",
//   //   reasonOfRejection: "reject",
//   //   notes: "note",
//   //   grossTotal: "gross",
//   //   totalDiscount: "total",
//   //   totalTax: "tax",
//   //   items: [{
//   //     id:1,
//   //     productNumber:1,
//   //     description:"desc",
//   //     quantity:1,
//   //     unitOfMeasurment:"unit",
//   //     listPrice:1,
//   //     discount:1,
//   //     discountAmount:1,
//   //     netPrice:1,
//   //     netValue:1,
//   //     taxDetails:{
//   //       taxType:"type",
//   //       taxRate:"rate",
//   //       taxAmount:1
//   //     }
//   //   },
//   //   {
//   //     id:2,
//   //     productNumber:2,
//   //     description:"des2",
//   //     quantity:2,
//   //     unitOfMeasurment:"unit2",
//   //     listPrice:2,
//   //     discount:2,
//   //     discountAmount:2,
//   //     netPrice:2,
//   //     netValue:2,
//   //     taxDetails:{
//   //       taxType:"typ2",
//   //       taxRate:"rate2",
//   //       taxAmount:2
//   //     }
//   //   }],
//   //   attachment: [
//   //     {
//   //       title:"title",
//   //       attachmentDocument:"attach"
//   //     },
//   //     {
//   //       title:"title2",
//   //       attachmentDocument:"attach2"
//   //     },
//   //   ],
//   //   customerInfo: {
//   //     id: 1,
//   //     customerName: "name",
//   //     address: "cairo",
//   //     phone: "1234",
//   //     email: "email@gmail.com",
//   //     currency: "currency"
//   //   }
//   // }
// ];


// export default salesDetailData;
