export interface Identification {
  Context: {
    Parameter: {
      Name: string;
      Value: string;
    };
  };
  Code: codeList[];
}
export interface codeList {
  Value: number;
  Description: string;
}

const identification: Identification[] = [
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "AD"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Registration Number (NRT)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "AE"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "AL"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "AM"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "AO"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Individuals (método declarativo)"
      },
      {
        "Value": 2,
        "Description": "Individuals (método da estimativa)"
      },
      {
        "Value": 3,
        "Description": "Individuals (Comércio Informal)"
      },
      {
        "Value": 4,
        "Description": "Companies (Empresas)"
      },
      {
        "Value": 5,
        "Description": "Institutional Entities"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "AR"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT registration number for companies (CUIT)"
      },
      {
        "Value": 2,
        "Description": "VAT registration number for natural persons (CUIL)"
      },
      {
        "Value": 3,
        "Description": "Tax number for income tax"
      },
      {
        "Value": 4,
        "Description": "Regional tax number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "AT"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "General Tax Number"
      },
      {
        "Value": 3,
        "Description": "Tax Advisor Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "AU"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Business Number (ABN)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "AW"
      }
    },
    "Code": [{
      "Value": 3,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "AZ"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BA"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Identification Number"
      },
      {
        "Value": 2,
        "Description": "Tax Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BB"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number (TIN)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BD"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BE"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Enterprise Number"
      },
      {
        "Value": 3,
        "Description": "Code not valid, use VAT Registration Number"
      },
      {
        "Value": 4,
        "Description": "National Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BF"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BG"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Single ID Code (BULSTAT)"
      },
      {
        "Value": 2,
        "Description": "Personal ID"
      },
      {
        "Value": 3,
        "Description": "Social Security Number"
      },
      {
        "Value": 4,
        "Description": "VAT Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BH"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BI"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BJ"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BO"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Number NIT"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BR"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT registration number for companies (CNPJ)"
      },
      {
        "Value": 2,
        "Description": "VAT registration number for natural persons (CPF)"
      },
      {
        "Value": 3,
        "Description": "Tax number given by the relevant state (IE)"
      },
      {
        "Value": 4,
        "Description": "Tax number given by the relevant town or city (IM)"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BS"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number (TIN)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BT"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Payer Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BY"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "UNP Number"
      },
      {
        "Value": 2,
        "Description": "OKPO Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "BZ"
      }
    },
    "Code": [{
      "Value": 5,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CA"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Federal Business Number"
      },
      {
        "Value": 2,
        "Description": "Account Number"
      },
      {
        "Value": 3,
        "Description": "Business Number"
      },
      {
        "Value": 4,
        "Description": "Permit Number"
      },
      {
        "Value": 5,
        "Description": "Quebec Identification Number"
      },
      {
        "Value": 6,
        "Description": "Quebec Enterprise Number"
      },
      {
        "Value": 7,
        "Description": "QST Registration Number"
      },
      {
        "Value": 8,
        "Description": "Social Insurance Number (SIN)"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CD"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CG"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CH"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Number"
      },
      {
        "Value": 2,
        "Description": "UID Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CI"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Taxpayer Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CL"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "RUT Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CM"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Employer Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CN"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Number"
      },
      {
        "Value": 2,
        "Description": "Computer Code"
      },
      {
        "Value": 3,
        "Description": "Tax Payer's File Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CO"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "31-NIT Number"
      },
      {
        "Value": 10,
        "Description": "33-Different Foreigner ID"
      },
      {
        "Value": 11,
        "Description": "42-Foreign Identification"
      },
      {
        "Value": 12,
        "Description": "43-No Foreign ID"
      },
      {
        "Value": 13,
        "Description": "44-Foreign ID Corporations"
      },
      {
        "Value": 14,
        "Description": "46-Diplomatic ID"
      },
      {
        "Value": 2,
        "Description": "13-Citizenship card"
      },
      {
        "Value": 3,
        "Description": "41-Passport"
      },
      {
        "Value": 4,
        "Description": "11-Birth Certificate"
      },
      {
        "Value": 5,
        "Description": "12-Identity Card"
      },
      {
        "Value": 6,
        "Description": "14-Certificate of Successions expedited by registration Authority"
      },
      {
        "Value": 7,
        "Description": "15-Document expedited by Judge/Court"
      },
      {
        "Value": 8,
        "Description": "21-Foreigner Card"
      },
      {
        "Value": 9,
        "Description": "22-Foreigner ID"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CR"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Number CR"
      },
      {
        "Value": 2,
        "Description": "ID Number"
      },
      {
        "Value": 3,
        "Description": "Legal ID Number"
      },
      {
        "Value": 4,
        "Description": "DIMEX Number"
      },
      {
        "Value": 5,
        "Description": "NITE Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CU"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CV"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number (NIF)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CW"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CY"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "UID"
      },
      {
        "Value": 3,
        "Description": "IVD"
      },
      {
        "Value": 4,
        "Description": "Tax Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "CZ"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax Number DIC"
      },
      {
        "Value": 3,
        "Description": "Number ICO"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "DE"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Income Tax Number (§48)"
      },
      {
        "Value": 3,
        "Description": "Turnover tax no. (Credit proc. §14)"
      },
      {
        "Value": 4,
        "Description": "Tax number for electronic Tax declaration"
      },
      {
        "Value": 5,
        "Description": "Tax Number"
      },
      {
        "Value": 6,
        "Description": "Income Tax ID"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "DK"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "P-Number"
      },
      {
        "Value": 3,
        "Description": "SE-Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "DO"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Number RNC"
      },
      {
        "Value": 2,
        "Description": "Personal Identification Card"
      },
      {
        "Value": 3,
        "Description": "Foreign Passport"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "DZ"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "RC Number"
      },
      {
        "Value": 3,
        "Description": "Tax Article number (AI)"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "EC"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Number (RUC) for People"
      },
      {
        "Value": 3,
        "Description": "Tax Number (RUC) for Companies"
      },
      {
        "Value": 4,
        "Description": "Citizenship card"
      },
      {
        "Value": 5,
        "Description": "Passport"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "EE"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "EG"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Identification Number"
      },
      {
        "Value": 2,
        "Description": "Sales Tax Number"
      },
      {
        "Value": 3,
        "Description": "Commercial Registration Number"
      },
      {
        "Value": 6,
        "Description": "Personal Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "ES"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number (NOI)"
      },
      {
        "Value": 2,
        "Description": "NIF Number"
      },
      {
        "Value": 3,
        "Description": "DNI Number"
      },
      {
        "Value": 4,
        "Description": "NIE Number"
      },
      {
        "Value": 5,
        "Description": "CIF Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "ET"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "FI"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Business ID"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "FJ"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "FO"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "FR"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Ministry of finance registration number SIRET"
      },
      {
        "Value": 3,
        "Description": "Ministry of finance registration number SIREN"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GA"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Cert of Incorporation Regn Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GB"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "National Insurance Number"
      },
      {
        "Value": 3,
        "Description": "Company Registration Number"
      },
      {
        "Value": 4,
        "Description": "Unique Taxpayer's Reference"
      },
      {
        "Value": 5,
        "Description": "Accounts Office Reference"
      },
      {
        "Value": 6,
        "Description": "Tax Office Reference Number"
      },
      {
        "Value": 7,
        "Description": "Subcontractor Verification Number"
      },
      {
        "Value": 8,
        "Description": "Employer's Reference Number"
      },
      {
        "Value": 9,
        "Description": "Northern Ireland Protocol: VAT Reg. No."
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GD"
      }
    },
    "Code": [{
      "Value": 3,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GE"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GH"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration NUmber"
      },
      {
        "Value": 2,
        "Description": "Tax Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GI"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number (TIN)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GN"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Business Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GP"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GR"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Personal Identification Number"
      },
      {
        "Value": 3,
        "Description": "Tax number for domestic customers (AFM number)"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GT"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Identification Number(Individuals)"
      },
      {
        "Value": 3,
        "Description": "Personal Identification Document (DPI)"
      },
      {
        "Value": 4,
        "Description": "Tax Identification Number(Business)"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "GY"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "HK"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "HK Business Registration Number"
      },
      {
        "Value": 2,
        "Description": "HKID Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "HN"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Identification Number(Employee ID)"
      },
      {
        "Value": 3,
        "Description": "Tax Identification Number(Individuals)"
      },
      {
        "Value": 4,
        "Description": "Tax Identification Number(Business)"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "HR"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "JMBG Number"
      },
      {
        "Value": 2,
        "Description": "OIB Number"
      },
      {
        "Value": 3,
        "Description": "VAT Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "HU"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax Number"
      },
      {
        "Value": 4,
        "Description": "Group Tax Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "ID"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax-payer Registration Number (NPWP)"
      },
      {
        "Value": 2,
        "Description": "Taxable Entrepreneur Confirmation Number (NPPKP)"
      },
      {
        "Value": 4,
        "Description": "National Identity Number (NIK)"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "IE"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "IL"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number / Partnership Number"
      },
      {
        "Value": 2,
        "Description": "Withholding Tax Number"
      },
      {
        "Value": 3,
        "Description": "Company Legal ID"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "IM"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "IN"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Excise Control Code Number"
      },
      {
        "Value": 10,
        "Description": "Central Excise Division"
      },
      {
        "Value": 11,
        "Description": "Corporate Identity Number"
      },
      {
        "Value": 12,
        "Description": "GST Identification Number"
      },
      {
        "Value": 2,
        "Description": "Service Tax Registration Number"
      },
      {
        "Value": 3,
        "Description": "Central Sales Tax Registration Number"
      },
      {
        "Value": 4,
        "Description": "Local Sales Tax Registration Number"
      },
      {
        "Value": 5,
        "Description": "Tax Deduction and Collection Account Number"
      },
      {
        "Value": 6,
        "Description": "Taxpayer Identification Number"
      },
      {
        "Value": 7,
        "Description": "Permanent Account Number"
      },
      {
        "Value": 8,
        "Description": "Premises Code Number"
      },
      {
        "Value": 9,
        "Description": "Central Excise Range"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "IR"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "IS"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "IT"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Fiscal Code"
      },
      {
        "Value": 3,
        "Description": "IVA Code"
      },
      {
        "Value": 4,
        "Description": "SIA code"
      },
      {
        "Value": 6,
        "Description": "Digital ID Code"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "JE"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "GST Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "JM"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "JO"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Commercial Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "JP"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "KE"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Personal Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "KH"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "General Department of Tax"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "KR"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Representative's ID number"
      },
      {
        "Value": 2,
        "Description": "Business partner's VAT number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "KW"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "KY"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "KZ"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Registration Number (RNN)"
      },
      {
        "Value": 2,
        "Description": "VAT Registration Certificate Number"
      },
      {
        "Value": 3,
        "Description": "Business Identification Number (BIN)"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "LA"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "LB"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number (TIN)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "LI"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "LK"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Permanent Account Number"
      },
      {
        "Value": 2,
        "Description": "Taxpayer Identification number (TIN)"
      },
      {
        "Value": 3,
        "Description": "Nation Building Tax (NBT)"
      },
      {
        "Value": 4,
        "Description": "Service Tax Registration Number"
      },
      {
        "Value": 5,
        "Description": "Tax Deduction and Collection Account Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "LR"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Payer Identification Number (TIN)"
      },
      {
        "Value": 2,
        "Description": "Goods and Services Tax (GST) Number"
      },
      {
        "Value": 3,
        "Description": "Business Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "LS"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "LT"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "LU"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "LV"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "LY"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MA"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "RC Number"
      },
      {
        "Value": 3,
        "Description": "Patente"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MC"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MD"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "ME"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "PDV Number"
      },
      {
        "Value": 2,
        "Description": "PIB Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MG"
      }
    },
    "Code": [{
      "Value": 2,
      "Description": "Fiscal Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MK"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Personal Number"
      },
      {
        "Value": 2,
        "Description": "VAT Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "ML"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MM"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MQ"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MT"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MU"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Account Number (TAN)"
      },
      {
        "Value": 2,
        "Description": "Business Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MW"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Taxpayer Identification Number"
      },
      {
        "Value": 2,
        "Description": "VAT Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MX"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "RFC Number"
      },
      {
        "Value": 2,
        "Description": "VAT Liability"
      },
      {
        "Value": 3,
        "Description": "CURP Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MY"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "GST Identification Number"
      },
      {
        "Value": 3,
        "Description": "Sales Tax Registration Number"
      },
      {
        "Value": 4,
        "Description": "Service Tax Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "MZ"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Unique Tax Registration Number (NUIT)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "NA"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Vat Registration number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "NE"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 3,
        "Description": "Tax Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "NG"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Identification Number (TIN)"
      },
      {
        "Value": 2,
        "Description": "RC Number"
      },
      {
        "Value": 5,
        "Description": "VAT Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "NI"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Number RUC"
      },
      {
        "Value": 2,
        "Description": "Employer Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "NL"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "BECON Number"
      },
      {
        "Value": 3,
        "Description": "Chamber of commerce number"
      },
      {
        "Value": 4,
        "Description": "EORI number(Economic Operators Registration and Identification nummer)"
      },
      {
        "Value": 5,
        "Description": "Fiscal Unit Number"
      },
      {
        "Value": 6,
        "Description": "Location Number"
      },
      {
        "Value": 7,
        "Description": "VAT Identification Number for Self-Employed Person (Obsolete)"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "NO"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Number"
      },
      {
        "Value": 2,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 3,
        "Description": "Organization Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "NP"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Permanent Account Number (PAN)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "NZ"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "IRD Number"
      },
      {
        "Value": 2,
        "Description": "GST Number"
      },
      {
        "Value": 3,
        "Description": "New Zealand Business Number (NZBN)"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "OM"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax Deduction and Collection Account Number"
      },
      {
        "Value": 3,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 4,
        "Description": "Tax Card Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PA"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Number RUC"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PE"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "RUC Number"
      },
      {
        "Value": 2,
        "Description": "National Identification Document"
      },
      {
        "Value": 3,
        "Description": "Passport"
      },
      {
        "Value": 4,
        "Description": "Fiscal ID for Individuals"
      },
      {
        "Value": 5,
        "Description": "Foreigner ID"
      },
      {
        "Value": 6,
        "Description": "Other Type of Documents"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PF"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PG"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PH"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Taxpayer Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PK"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "National Tax Number"
      },
      {
        "Value": 3,
        "Description": "Sales Tax Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PL"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "NIP Number"
      },
      {
        "Value": 3,
        "Description": "REGON Statistical Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PR"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "PUERTO RICO: TAX ID"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PS"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PT"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Foreign VAT Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "PY"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Number RUC"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "QA"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "RE"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "RO"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "RS"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "JMBG Number or PIB Number"
      },
      {
        "Value": 2,
        "Description": "Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "RU"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Number INN"
      },
      {
        "Value": 2,
        "Description": "Tax Number OKPO"
      },
      {
        "Value": 3,
        "Description": "Tax Number KPP"
      },
      {
        "Value": 4,
        "Description": "Tax Number OFK"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "RW"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "SA"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax ID"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "SB"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "SE"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Organization Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "SG"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Goods and Services Tax Registration Number"
      },
      {
        "Value": 2,
        "Description": "NRIC Number"
      },
      {
        "Value": 3,
        "Description": "Business Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "SI"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Company Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "SK"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax Number DIC"
      },
      {
        "Value": 3,
        "Description": "Tax Number ICO"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "SM"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Business Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "SN"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number (TIN)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "ST"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Registration Number (NIF)"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "SV"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "NIT Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "SZ"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Identification Number"
      },
      {
        "Value": 2,
        "Description": "VAT Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "TC"
      }
    },
    "Code": [{
      "Value": 3,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "TD"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "TH"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Personal ID"
      },
      {
        "Value": 2,
        "Description": "Registered Tax ID"
      },
      {
        "Value": 3,
        "Description": "VAT Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "TN"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Registration Number"
      },
      {
        "Value": 2,
        "Description": "Identity Card"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "TO"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "TR"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Office"
      },
      {
        "Value": 2,
        "Description": "Tax Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "TT"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "BIR - Board of Inland Revenue"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "TW"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "GUI Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "TZ"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration NUmber"
      },
      {
        "Value": 2,
        "Description": "TIN-Tax Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "UA"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Payer Identification Number"
      },
      {
        "Value": 2,
        "Description": "Identification code of the payer according to USRE"
      },
      {
        "Value": 3,
        "Description": "Identification number of the payer according to SRNP"
      },
      {
        "Value": 4,
        "Description": "Registration number of the payer for joint venture"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "UG"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Tax Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "US"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Social Security Number"
      },
      {
        "Value": 2,
        "Description": "Employer Identification Number"
      },
      {
        "Value": 3,
        "Description": "State Business License Number"
      },
      {
        "Value": 4,
        "Description": "State Sales and Use Tax Registration Number"
      },
      {
        "Value": 5,
        "Description": "Payer Name Control"
      },
      {
        "Value": 6,
        "Description": "Global Intermediary Identification Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "UY"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Number RUC"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "UZ"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "VE"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "RIF Number"
      },
      {
        "Value": 2,
        "Description": "NIT Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "VN"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "VU"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "VAT Registration Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "WS"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Identification Number"
    }]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "ZA"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "VAT Registration Number"
      },
      {
        "Value": 2,
        "Description": "Income Tax Registration No"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "ZM"
      }
    },
    "Code": [
      {
        "Value": 1,
        "Description": "Tax Registration Number"
      },
      {
        "Value": 2,
        "Description": "Taxpayer Identification Number"
      },
      {
        "Value": 3,
        "Description": "VAT Registration Number"
      }
    ]
  },
  {
    "Context": {
      "Parameter": {
        "Name": "CountryCode",
        "Value": "ZW"
      }
    },
    "Code": [{
      "Value": 1,
      "Description": "Tax Registration Number"
    }]
  }
]
export default identification;
