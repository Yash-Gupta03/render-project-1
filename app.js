const express = require("express");
const fs = require('fs'); 
const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const app = express();
// const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const userRoutes = require("./routers/user");
const expenseRoutes = require('./routers/expense');
const purchaseRoutes = require('./routers/purchase');
const premiumRoutes = require('./routers/premium');
const passwordRoutes = require('./routers/password');


const cors = require("cors");
const Expense = require("./models/expense");
const User = require("./models/user");
const Order = require("./models/order");
const ForgotPasswordRequests = require('./models/forgotpasswordrequests');


app.use(cors());
// app.use(helmet());
// const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'),{flags:'a'});
// app.use(morgan('combined', {stream: accessLogStream}));

app.use(bodyParser.json({ extended: false }));

app.use('/user',userRoutes);
app.use('/expense',expenseRoutes);
app.use('/purchase', purchaseRoutes);
app.use('/premium', premiumRoutes)
app.use('/password', passwordRoutes)

app.use(express.static("public"));

app.use((req, res)=>{
  res.sendFile(path.join(__dirname, `public/${req.url}`));
})

mongoose.connect(process.env.MONGO_URL).then(result => {    
  console.log('connected');
    app.listen(process.env.PORT);
  }).catch(err => {
    console.log(err);
  })
