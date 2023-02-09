export interface SalesOrderDetails{
  id: number;
  status: string;
  description?: string;
  externalRefrence: string;
  requstedDate: string;
  notes: string;
  grossTotal: string;
  totalDiscountRate: string;
  totalDiscountAmount: string;
  totalTax: string;
  netTotal: string;
  items: SalesOrderItems[]
  attachment: SalesOrderAttachment[]
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
}

export interface SalesOrderAttachment{
  title:string;
  doc:string;
}
export interface SalesOrderItems {
  length?: number;
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

}
const salesOrderDetailData:SalesOrderDetails[]=[
  {
    id:1,
    status:"status",
    externalRefrence:"external",
    requstedDate:"date",
    notes:"note",
    grossTotal:"10000",
    totalDiscountRate:"rate",
    totalDiscountAmount:"tda",
    totalTax:"22",
    netTotal:"net",
    items:[{
      id:"1",
      description:"desc",
      requestedQuantity:"quantity",
      confirmedQuantity:"confirm",
      unitOfMeasurmentCode:"code",
      unitOfMeasurment:"unit",
      currency:"currency",
      listPrice:"listprice",
      discountAmount:"amount",
      discountRate:"disrate",
      netPrice:"price",
      netValue:"value",
      notes:"note",
      reasonOfRejection:"rr",
      taxDetails:{
        taxType:"type",
        taxRate:"rate",
        taxAmount:"amount"
      }
    }],
    attachment:[
      {
        title:"title",
        doc:"attach"
      },
      {
        title:"title2",
        doc:"attach2"
      },
    ],
    customer:{
      id:"1",
      name:"name",
      address:"add",
      phone:"1000",
      email:"email@",
      contact:{
        name:"name",
        phone:"122",
        email:"gmail"
      },
      currency:"currecncy"
    }
  }
]
export default salesOrderDetailData;
