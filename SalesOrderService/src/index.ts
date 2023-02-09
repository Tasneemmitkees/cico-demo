import express = require('express')
const bodyParser = require('body-parser');
import { salesOrderRouter } from './Routes/SalesOrderRoute';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
    // console.log("a");
    

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/api/v1',salesOrderRouter)

app.listen(port,()=>{
    console.log('servers running at '+port );
});

