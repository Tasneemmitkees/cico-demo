export interface IsalesQuotation {
  map(arg0: ({ id, status, date, netAmount }: { id: any; status: any; date: any; netAmount: any; }) => { id: any; status: any; date: any; netAmount: any; }): IsalesQuotation[];
  id:number;
  status: string;
  date: string;
  netAmount: number;
}
