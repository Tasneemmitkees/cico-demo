const express = require('express');
import { SalesOrderController } from "../Controllers/SalesOrderController";

const salesOrderController = new SalesOrderController()
const salesOrderRouter = express.Router()

salesOrderRouter.post('/SalesOrder',salesOrderController.addSalesOrder)
salesOrderRouter.post('/SalesOrder/addWithRef/:quoteID/:buyerPartyID',salesOrderController.addSalesOrderWithRef)
// salesOrderRouter.delete('/SalesOrder/:orderID',salesOrderController.deleteSalesOrder)
// salesOrderRouter.put('/SalesOrder/:orderID',salesOrderController.updateSalesOrder)
salesOrderRouter.get('/SalesOrder/:orderID',salesOrderController.getSalesOrder)
salesOrderRouter.get('/SalesOrder',salesOrderController.getAllSalesOrder)

export{salesOrderRouter}