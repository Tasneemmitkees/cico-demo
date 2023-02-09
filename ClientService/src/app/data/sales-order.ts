export interface SalesOrder{
  map(arg0: ({ id, status, postingDate, requestedDate, externalReference, totalNet, totalCurrency }: { id: any; status: any; postingDate: any; requestedDate: any; externalReference: any; totalNet: any; totalCurrency: any; }) => { id: any; status: any; postingDate: any; requestedDate: any; externalReference: any; totalNet: any; totalCurrency: any; }): any;
  id: number;
  status: string;
  accountId?: string; //
  accountName?: string; //
  postingDate: string;
  requestedDate: string;
  externalReference: string;
  totalNet: number;
  totalGross?: number; //
  totalCurrency: string;
}
