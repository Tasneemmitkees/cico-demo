import { Attachement,Customer,Item,Seller } from "./customer-invoice-detail";
export interface CustomerInvoice{
  map(arg0: ({ ID, type, date, status, externalReference, netAmount }: { ID: any; type: any; date: any; status: any; externalReference: any; netAmount:any }) => { ID: any; type: any; date: any; status: any; externalReference: any; netAmount: any }): any;
  ID:Number,//ID
  type:string//
  date:string,
  status:String,//ReleaseStatusCodeText
  externalReference:string,
  paymentMethod:string,
  paymentTerms:string,
  dueDate:string,
  notes:string,
  grossTotal:Number,
  totalDiscount:Number,
  netAmount:string|number,
  totalTax:Number,//TotalTaxAmount
  netTotal:Number,//TotalNetAmount
  attachements:Attachement[],
  customer:Customer,
  items:Item[],
  seller:Seller,
}
const invoiceData:CustomerInvoice []=[

  // {
  //   ID:2,
  //   type:"type22",
  //   date:"12-12-2022",
  //   status:"status2",
  //   externalReference:"external2",
  //   paymentMethod:"pay method2",
  //   paymentTerms:"term2s",
  //   dueDate:"13-12-2022",
  //   notes:"note2",
  //   grossTotal:2002,
  //   totalDiscount:32,
  //   totalTax:342,
  //   netTotal:42,
  //   attachements:[
  //     {
  //       title:"title2",
  //       document:"attach2"
  //     },
  //     {
  //       title:"title22",
  //       document:"attach22"
  //     },
  //   ],
  //   customer:{
  //     name:"name3",
  //     address:"add3",
  //     contact:"contact3",
  //     phone:10003,
  //     email:"email@3",
  //     currency:"3currecncy",
  //     Country:"3country",
  //     taxNumberType:"3type",
  //     taxNumber:323
  //   },
  //   items:[{
  //     productNumber:"31",
  //     description:"3desc",
  //     quantity:310,
  //     UOM:"3UOM",
  //     listPrice:310,
  //     discount:33,
  //     discountAmount:3123,
  //     netPrice:323,
  //     netValue:367,
  //     taxDetails:{
  //       type:"type3",
  //       rate:"rate3",
  //       amount:2333
  //     }
  //   }],
  //   seller:{
  //     seller:"seller3",
  //   invoicingUnit:"unit3",
  //   Country:"country3",
  //   region:"region3",
  //   taxNumberType:"3taxnumber",
  //   taxNumber:12343
  //   }

  // }
]
export default invoiceData;

