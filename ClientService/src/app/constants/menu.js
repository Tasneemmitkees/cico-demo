"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("src/environments/environment");
const adminRoot = environment_1.environment.adminRoot;
const data = [{
        icon: '',
        label: 'menu.core',
        to: `${adminRoot}/core`,
    },
    {
        icon: '',
        label: 'menu.customerportal',
        to: `${adminRoot}/customerportal`,
        subs: [{
                label: 'menu.customerinvoice',
                to: `${adminRoot}/customerportal/customerinvoice`
            },
            {
                label: 'menu.customer',
                to: `${adminRoot}/customerportal/customer`,
                subs: [{
                        label: 'menu.individualcustomer',
                        to: `${adminRoot}/customerportal/individualcustomer`,
                    },
                    {
                        label: 'menu.companycustomer',
                        to: `${adminRoot}/customerportal/companycustomer`,
                    },
                ]
            },
            {
                label: 'menu.salesquotations',
                to: `${adminRoot}/customerportal/salesquotations`
            },
            {
                label: 'menu.salesorder',
                to: `${adminRoot}/customerportal/salesorder`,
                subs: [{
                        label: 'menu.salesorder',
                        to: `${adminRoot}/customerportal/salesorder`,
                    },
                    {
                        label: 'menu.newsalesorder',
                        to: `${adminRoot}/customerportal/newsalesorder`,
                    },
                ]
            },
            {
                label: 'menu.customerinvoice',
                to: `${adminRoot}/customerportal/customerinvoice`
            },
        ],
    },
    {
        icon: '',
        label: 'menu.supplierportal',
        to: `${adminRoot}/supplierportal`,
    },
    {
        icon: '',
        label: 'menu.einvoices',
        to: `${adminRoot}/einvoices`,
    },
    {
        icon: '',
        label: 'menu.suppliernetwork',
        to: `${adminRoot}/suppliernetwork`,
    },
    {
        icon: '',
        label: 'menu.hr',
        to: `${adminRoot}/hr`,
    },
];
exports.default = data;
