import express = require('express')
const bodyParser = require('body-parser');
import { salesOrderRouter } from './Routes/SalesOrderRoute';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 
app.use('/api/v1',salesOrderRouter)

app.listen(port,()=>{
    console.log('servers running at '+port );
});

