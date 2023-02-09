export interface IdentificationNumbers{
    objectID:string,
    country:string;
    numberType:string;
    numberID:number;
}
export interface Attachement{
    objectID:string;
    title:string;
    attachmentDoc:string;
    type:string
}

export interface BankData{
    bankCountry:string;
    bankName:string;
    accountNumber:String;
}

export interface Address {
    objectID:String,
    postalObjectID?:String,
    description?:String,
    country:String,
    city:String,
    addressLine1:String,
    addressLine2:String,
    street:String,
    buildingNumber:string,
    websiteObjectID?:String,
    website?:String,
    postalCode?:String;
}
