import axios from "axios";
import "dotenv/config";
import { auth } from "../types/auth";
import {
  SalesOrder,
  SalesOrderAttachment,
  SalesOrderItems,
  SalesOrdersDetails,
} from "../types/type";
import console from "console";

// const hostName: string | undefined = process.env.HOSTNAME;
// const username: string | undefined = process.env.NAME;
// const password: string | undefined = process.env.PASSWORD;

// const salesOrder: SalesOrder[] = [];
// const salesOrderDetails: SalesOrdersDetails[] = [];
// const salesOrderItems: SalesOrderItems[] = [];
// const salesOrderAttachment: SalesOrderAttachment[] = [];

const formateDate = (date: any) => {
  let dateMilli = date.match(/\d+/)[0];
  let formatedDate = new Date(parseInt(dateMilli));
  return formatedDate;
};

class SalesOrderController {
  public static async get_Token(hostName: string, userName: string, password: string): Promise<auth> {
    let temp: auth = {
      token: "",
      cookies: "",
    };
    var config1 = {
      method: "get",
      url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder`,
      headers: {
        Authorization:
          "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
        "x-csrf-token": "fetch",
      },
    };
    await axios(config1)
      .then(async function (response1) {
        temp = {
          token: response1.headers["x-csrf-token"],
          cookies: response1.headers["set-cookie"],
        };
        return temp;
      })
      .catch(function (error1) {
        console.log("error auth: " + error1);
      });
    return temp;
  }
  async addSalesOrderWithRef(req: any, res: any): Promise<void> {
    const { customerID, hostName, userName, password } = req.query;

    let authObj: auth = await SalesOrderController.get_Token(hostName, userName, password);
    let objectID: String = "";
    //create empty sales order
    let config1 = {
      method: "post",
      url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder/SalesOrderCollection`,
      headers: {
        Authorization:
          "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
        "x-csrf-token": authObj.token,
        Cookie: authObj.cookies,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({
        BuyerParty: {
          PartyID: req.params.buyerPartyID,
        },
      }),
    };
    await axios(config1)
      .then(function (response) {
        objectID = response.data.d.results.ObjectID;
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
    console.log(req.params.quoteID);
    //link sales order with sales quote
    let config2 = {
      method: "post",
      url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder/AddReferenceWithDataProvision?ObjectID='${objectID}'&BusinessTransactionDocumentKey_BusinessTransactionDocumentID='${req.params.quoteID}'&BusinessTransactionDocumentKey_BusinessTransactionDocumentTypeCode='30'`,
      headers: {
        Authorization:
          "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
        "x-csrf-token": authObj.token,
        Cookie: authObj.cookies,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await axios(config2)
      .then(function (response1) {
        res.status(200).send(response1.data);
      })
      .catch(function (error1) {
        console.log(error1);
        res.status(200).json("error1");
      });
  }
  async addSalesOrder(req: any, res: any): Promise<void> {
    const { customerID, hostName, userName, password } = req.query;

    let config = {
      method: "get",
      url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder`,
      headers: {
        Authorization:
          "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
        "x-csrf-token": "fetch",
      },
    };
    let token: any = await axios(config)
      .then(function (response) {
        let token = response.headers["x-csrf-token"];
        let cookies: any = response.headers["set-cookie"];
        let tokenObj = {
          token: token,
          cookies: cookies,
        };
        return tokenObj;
      })
      .catch(function (error) {
        console.log(error);
        res.status(200).json("error" + error);
      });
    console.log(req.body);

    let config1 = {
      method: "post",
      url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder/SalesOrderCollection`,
      headers: {
        Authorization:
          "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
        "x-csrf-token": token.token,
        Cookie: token.cookies,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({
        ExternalReference: req.body.externalReference,
        DistributionChannelCode: req.body.distributionChannelCode,
        SalesUnitParty: {
          PartyID: req.body.salesUnitPartyID,
        },
        BuyerParty: {
          PartyID: req.body.buyerPartyID,
        },
        PricingTerms: {
          CurrencyCode: req.body.currencyCode,
          GrossAmountIndicator: false, ///
        },
        Item: req.body.items,
      }),
    };
    let salesOrder = await axios(config1)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
        res.status(200).json("error" + error.response.data);
      });
  }
  getSalesOrder(req: any, res: any): void {
    const salesOrderItems: SalesOrderItems[] = [];
    const salesOrderAttachment: SalesOrderAttachment[] = [];
    const salesOrderDetails: SalesOrdersDetails[] = [];

    const orderID = req.params.orderID;
    const { customerID, hostName, userName, password } = req.query;

    var config = {
      method: "get",
      // url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rcustomerquote/CustomerQuoteCollection?$format=json&$expand=BuyerParty&$select=ID,NetAmount,DateTime,LifeCycleStatusCodeText,BuyerParty`,
      url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder/SalesOrderCollection?$format=json&$filter=ID%20eq%20%27${orderID}%27&$expand=Item/ItemProduct,Item/ItemScheduleLine,Item/ItemPriceAndTaxCalculation/ItemPriceComponent,Item/ItemText,AttachmentFolder,Text,PriceAndTaxCalculation/PriceComponent,BuyerParty/BuyerPartyName,BuyerParty/AddressSnapshot/AddressSnapshotFormattedAddress,BuyerParty/ContactAddressSnapshot,Item/ItemPriceAndTaxCalculation/SalesOrderItemProductTaxDetails`,
      headers: {
        Authorization:
          "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
      },
    };
    // console.log(id);

    axios(config)
      .then(function (response) {
        let obj = response.data.d.results;
        // console.log(obj);
        obj.forEach((ele: any) => {
          // console.log(ele);
          let itemObj = ele.Item;
          itemObj.forEach((ele: any) => {
            let itemTaxObj = ele.ItemPriceAndTaxCalculation.SalesOrderItemProductTaxDetails
            let priceComponent =
              ele.ItemPriceAndTaxCalculation.ItemPriceComponent;
            let listPriceObj = priceComponent.find(
              (ele: { Description: string }) => {
                if (ele.Description == "List Price") return true;
              }
            );
            let itemDiscountObj = priceComponent.find(
              (ele: { Description: string }) => {
                if (ele.Description == "Product Discount (%)") return true;
              }
            );
            let itemNetValueObj = priceComponent.find(
              (ele: { Description: string }) => {
                if (ele.Description == "Total Item Net Value") return true;
              }
            );
            // let itemTaxObj = priceComponent.find(
            //   (ele: { Description: string }) => {
            //     if (ele.Description == "Value Added Tax (%)") return true;
            //   }
            // );
            let itemNotesObj = ele.ItemText.find(
              (ele: { TypeCodeText: string }) => {
                if (ele.TypeCodeText == "Customer Information") return true;
              }
            );
            // console.log(listPriceObj);
            let temp: SalesOrderItems = {
              id: ele.ItemProduct.ProductID,
              description: ele.Description,
              requestedQuantity: parseFloat(
                ele.ItemScheduleLine[0].Quantity
              ).toFixed(2),
              confirmedQuantity: parseFloat(
                ele.ItemScheduleLine[1].Quantity
              ).toFixed(2),
              unitOfMeasurmentCode: ele.ItemScheduleLine[0].unitCode,
              unitOfMeasurment: ele.ItemScheduleLine[0].unitCodeText,
              currency: ele.NetAmountCurrencyCodeText,
              listPrice: listPriceObj?.DecimalValue
                ? parseFloat(listPriceObj?.DecimalValue).toFixed(2)
                : "0",
              discountAmount: itemDiscountObj?.CalculatedAmount
                ? parseFloat(itemDiscountObj?.CalculatedAmount).toFixed(2)
                : "0",
              discountRate: itemDiscountObj?.DecimalValue
                ? parseFloat(itemDiscountObj?.DecimalValue).toFixed(2)
                : "0",
              netPrice: itemNetValueObj?.DecimalValue
                ? parseFloat(itemNetValueObj?.DecimalValue).toFixed(2)
                : "0",
              netValue: itemNetValueObj?.CalculatedAmount
                ? parseFloat(itemNetValueObj?.CalculatedAmount).toFixed(2)
                : "0",
              notes: itemNotesObj?.Text || "",
              reasonOfRejection: ele.CancellationReasonCodeText,
              // taxDetails: itemTaxObj
              taxDetails: {
                taxType: itemTaxObj[0]?.TypeCodeText || "VAT",
                taxRate: itemTaxObj[0]?.Percent
                  ? parseFloat(itemTaxObj[0]?.Percent).toFixed(2)
                  : "",
                taxAmount: itemTaxObj[0]?.Amount
                  ? parseFloat(itemTaxObj[0]?.Amount).toFixed(2)
                  : "",
              },
            };
            salesOrderItems.push(temp);
          });
          let attachmentObj = ele.AttachmentFolder;
          attachmentObj.forEach((ele: any) => {
            let temp: SalesOrderAttachment = {
              uuid: ele.UUID,
              title: ele.Title,
              doc: ele.Binary,
            };
            salesOrderAttachment.push(temp);
          });
          let notesObj = ele.Text.find((ele: { TypeCodeText: string }) => {
            if (ele.TypeCodeText == "Customer Information") return true;
          });
          let priceObj = ele.PriceAndTaxCalculation.PriceComponent.find(
            (ele: { TypeCodeText: string }) => {
              if (ele.TypeCodeText == "Overall Discount (%)") return true;
            }
          );

          let temp: SalesOrdersDetails = {
            id: ele.ID,
            status: ele.LifeCycleStatusCodeText,
            // discription: ele.Description,
            externalRefrence: ele.ExternalReference,
            requstedDate: ele.RequestedDate.substring(0, 10),
            notes: notesObj?.TextContent || "",
            grossTotal: parseFloat(ele.GrossAmount).toFixed(2),
            totalDiscountRate: priceObj?.DecimalValue
              ? parseFloat(priceObj?.DecimalValue).toFixed(2)
              : "0",
            totalDiscountAmount: priceObj?.CalculatedAmount
              ? parseFloat(priceObj?.CalculatedAmount).toFixed(2)
              : "0",
            totalTax: parseFloat(ele.TaxAmount).toFixed(2),
            netTotal: parseFloat(ele.NetAmount).toFixed(2),
            items: salesOrderItems,
            attachment: salesOrderAttachment,
            customer: {
              id: ele.BuyerParty.PartyID,
              name: ele.BuyerParty.BuyerPartyName[0].FormattedName,
              address:
                ele.BuyerParty.AddressSnapshot.AddressSnapshotFormattedAddress[0].FormattedPostalAddressDescription.replace(
                  /\//g,
                  ","
                ),
              phone: ele.BuyerParty.AddressSnapshot.FormattedNumberDescription1,
              email: ele.BuyerParty.AddressSnapshot.URI,
              currency: ele.NetAmountCurrencyCode,
              contact: {
                name: ele.BuyerParty.ContactAddressSnapshot.FormattedName || "",
                phone:
                  ele.BuyerParty.ContactAddressSnapshot
                    .FormattedNumberDescription || "",
                email: ele.BuyerParty.ContactAddressSnapshot.URI || "",
              },
            },
          };
          salesOrderDetails.push(temp);
        });
        res.status(200).json(salesOrderDetails);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getAllSalesOrder(req: any, res: any): void {
    const salesOrder: SalesOrder[] = [];
    const { customerID, hostName, userName, password } = req.query;

    var config = {
      method: "get",
      url: `https://${hostName}.sapbydesign.com/sap/byd/odata/cust/v1/rsalesorder/SalesOrderCollection?$format=json&$expand=BuyerParty/BuyerPartyName&$select=ID,LifeCycleStatusCodeText,BuyerParty,PostingDateTime,RequestedDate,ExternalReference,UUID,NetAmountCurrencyCode,NetAmount,GrossAmount&$filter=ReleaseStatusCodeText eq 'Released' and (ApprovalStatusCodeText eq 'Approved' or ApprovalStatusCodeText eq 'Approval not Necessary') and BuyerParty/PartyID eq '${customerID}'`,
      headers: {
        Authorization:
          "Basic " + Buffer.from(userName + ":" + password).toString("base64"),
      },
    };
    axios(config)
      .then(function (response) {
        let obj = response.data.d.results;
        // console.log(obj);
        obj.forEach((ele: any) => {
          // console.log(ele);
          let temp: SalesOrder = {
            id: ele.ID,
            status: ele.LifeCycleStatusCodeText,
            accountId: ele.BuyerParty.PartyID,
            accountName: ele.BuyerParty.BuyerPartyName[0].FormattedName,
            postingDate: formateDate(ele.PostingDateTime)
              .toISOString()
              .substring(0, 10),
            requestedDate: ele.RequestedDate.substring(0, 10),
            externalReference: ele.ExternalReference,
            totalNet: parseFloat(ele.NetAmount).toFixed(2),
            totalGross: parseFloat(ele.GrossAmount).toFixed(2),
            totalCurrency: ele.NetAmountCurrencyCode,
            uuid: ele.UUID,
          };
          salesOrder.push(temp);
        });
        res.status(200).json(salesOrder);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  public static formatDateOnly = (date: Date) => {
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  };
}

export { SalesOrderController };
