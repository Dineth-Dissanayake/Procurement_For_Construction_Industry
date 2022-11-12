 import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {connect} from './utils/db.connection';

const auth = require("./api/middleware/pw.auth");

const app = express();
const PORT = process.env.PORT || "8090";

app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "20mb" }));

//IMPORT ROUTES
const OrderRoutes = require("./api/routes/order.r");
app.use(OrderRoutes);

app.use("/api/", require("./api/routes/user.auth.r"));

app.get("/", (req, res, next) => {
    res.send("<h2>SYSTEM API🆗</h2>");
    next();
})

app.listen(PORT, () => {
    console.log('🚀 SERVER IS UP & RUNNING ON:', PORT);
    connect();
});