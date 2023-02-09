const express = require('express');
import { SalesOrderController } from "../Controllers/SalesOrderController";

const salesOrderController = new SalesOrderController()
const salesOrderRouter = express.Router()

//salesOrderRouter.post('/SalesOrder',salesOrderController.addSalesOrder)
salesOrderRouter.post('/SalesOrder',salesOrderController.addSalesOrderWithRef)
//salesOrderRouter.post('/token',SalesOrderController.get_Token)
// salesOrderRouter.delete('/SalesOrder/:orderID',salesOrderController.deleteSalesOrder)
// salesOrderRouter.put('/SalesOrder/:orderID',salesOrderController.updateSalesOrder)
// salesOrderRouter.get('/SalesOrder/:orderID',salesOrderController.getSalesOrder)
// salesOrderRouter.get('/SalesOrder',salesOrderController.getAllSalesOrder)
///SalesOrder/addWithRef/:quoteID/:buyerPartyID
export{salesOrderRouter}