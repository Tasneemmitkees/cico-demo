import { environment } from 'src/environments/environment';
import { UserRole } from '../shared/auth.roles';
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
  roles?: UserRole[];
}
console.log(UserRole.Admin);
console.log(UserRole.Editor);

const data: IMenuItem[] = [
  {
    icon: ' iconsminds-gears ',
    label: 'menu.configuration',
    to: `${adminRoot}/configuration`,
    roles: [UserRole.Admin],
    subs: [
      {
        icon: '',
        label: 'menu.bydConfigration',
        to: `${adminRoot}/configuration/bydConfigration`,
      },
      {
        icon:'',
        label:'menu.analyticalUser',
        to:`${adminRoot}/configuration/analyticalUser`,
      },
      {
        icon: '',
        label: 'menu.user',
        to: `${adminRoot}/configuration/user`,
        subs: [
          {
            icon: ' ',
            label: 'menu.userList',
            to: `${adminRoot}/configuration/user/userList`,
          },
          {
            icon: '',
            label: 'menu.newUser',
            to: `${adminRoot}/configuration/user/newUser`,
          },
        ],
      },
    ],
  },
  {
    icon: 'iconsminds-shop-4',
    label: 'menu.customerportal',
    to: `${adminRoot}/customerportal`,
    roles: [UserRole.Editor, UserRole.Editor1],
    subs: [
      {
        icon: 'iconsminds-monitor-analytics',
        label: 'menu.dashboard',
        to: `${adminRoot}/customerportal/dashboard`,
      },
      {
        icon: 'simple-icon-user ',
        label: 'Account Info',
        to: `${adminRoot}/customerportal/individualcustomer`,
        roles: [UserRole.Editor],
      },
      {
        icon: 'iconsminds-mens',
        label: 'Account Info',
        to: `${adminRoot}/customerportal/companycustomer`,
        roles: [UserRole.Editor1],
      },
      {
        icon: '',
        label: 'menu.productCatalog',
        to: `${adminRoot}/customerportal/productCatalog`,
      },
      // {
      //   icon:'',
      //   label: 'menu.activity',
      //   to: `${adminRoot}/customerportal/dashboard`,
      //   subs:[
      //     {
      //       icon:'iconsminds-check ',
      //       label:'menu.activityList',
      //       to:`${adminRoot}/customerportal/salesquotations`
      //     },
      //     {
      //       icon:'iconsminds-letter-open ',
      //       label:'menu.newActivity',
      //       to:`${adminRoot}/customerportal/salesquotations`
      //     },
      //   ]
      // },
      {
        icon: '',
        label: 'menu.rfq',
        to: `${adminRoot}/customerportal/rfq`,
        subs: [
          {
            icon: 'iconsminds-receipt-4',
            label: 'menu.rfqList',
            to: `${adminRoot}/customerportal/rfqList`,
          },
          {
            icon: 'iconsminds-pen-2',
            label: 'menu.newRfq',
            to: `${adminRoot}/customerportal/newRfq`,
          },
        ],
      },
      {
        icon: 'iconsminds-testimonal',
        label: 'menu.salesquotations',
        to: `${adminRoot}/customerportal/salesquotations`,
      },
      {
        icon: '',
        label: 'menu.salesorder',
        to: `${adminRoot}/customerportal/salesorder`,
        subs: [
          {
            icon: 'iconsminds-testimonal',
            label: 'menu.salesorderList',
            to: `${adminRoot}/customerportal/salesorder`,
          },
          {
            icon: 'iconsminds-add-cart',
            label: 'menu.newsalesorder',
            to: `${adminRoot}/customerportal/newsalesorder`,
          },
        ],
      },
      {
        icon: 'iconsminds-billing',
        label: 'menu.customerinvoice',
        to: `${adminRoot}/customerportal/customerinvoice`,
      },
    ],
  },
  {
    icon: 'iconsminds-handshake',
    label: 'menu.supplierportal',
    to: `${adminRoot}/supplierportal`,
    subs:[
      {
        icon: 'iconsminds-monitor-analytics',
        label: 'menu.dashboard',
        to: `${adminRoot}/supplierportal/dashboard`,
      },
      {
        icon: 'simple-icon-user ',
        label: 'menu.supplierProfile',
        to: `${adminRoot}/supplierportal/supplierProfile`,
      },
      {
        icon: '',
        label: 'menu.productCatalog',
        to: `${adminRoot}/supplierportal/productCatalog`,
        subs: [
          {
            icon: 'iconsminds-receipt-4',
            label: 'menu.productCatalogList',
            to: `${adminRoot}/supplierportal/productCatalog/productCatalogList`,
          },
          {
            icon: 'iconsminds-pen-2',
            label: 'menu.newProductCatalog',
            to: `${adminRoot}/supplierportal/productCatalog/newProductCatalog`,
          },
        ],
      },
      {
        icon: '',
        label: 'menu.rfq',
        to: `${adminRoot}/supplierportal/rfq`,
      },
      {
        icon: '',
        label: 'menu.purchaseOrder',
        to: `${adminRoot}/supplierportal/purchaseOrder`,
      },
      {
        icon: 'iconsminds-billing',
        label: 'menu.invoice',
        to: `${adminRoot}/supplierportal/invoice`,
        subs: [
          {
            icon: 'iconsminds-testimonal',
            label: 'menu.invoiceList',
            to: `${adminRoot}/supplierportal/invoice/invoiceList`,
          },
          {
            icon: 'iconsminds-add-cart',
            label: 'menu.newInvoice',
            to: `${adminRoot}/supplierportal/invoice/newInvoice`,
          },
        ],
      },
    ]
  },
  // {
  //   icon: 'iconsminds-billing',
  //   label: 'menu.einvoices',
  //   to: `${adminRoot}/einvoices`,
  // },
  // {
  //   icon: 'iconsminds-network',
  //   label: 'menu.suppliernetwork',
  //   to: `${adminRoot}/suppliernetwork`,

  // },

  // {
  //   icon: 'iconsminds-male-female',
  //   label: 'menu.hr',
  //   to: `${adminRoot}/hr`,
  // },
  // {
  //   label:'menu.blank-page',
  //   to:`${adminRoot}/blank`,
  // }
];
export default data;
