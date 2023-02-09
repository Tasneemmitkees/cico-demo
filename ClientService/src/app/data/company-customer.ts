import{Address, Attachement, BankData, IdentificationNumbers} from '../../../src/app/data/Customer'

export interface CompanyCustomer {
  objectID:String,
  accountID:String,
  customerType:String,
  arabicName:String,
  englishName:String,
  industryCode:String,
  status:String,
  identificationNumbers:IdentificationNumbers[]
  address:Address[],
  contactInformation:Contact[],
  bankData:BankData[],
  attachement:Attachement[]
}
export interface Contact{
  name:String,
  function:String,
  department:String,
  phone:Number,
  fax:Number,
  mobileNumber:Number,
  email:String,
  preferredMethodOfCommunication:String
}

