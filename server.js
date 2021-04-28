const express=require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const app = express();
app.use(express.json());
const db=require('./config/keys').mongoURI;
mongoose
.connect(db, { useUnifiedTopology: true, useNewUrlParser: true})
.then(()=> console.log('MongoDB Connnected...'))
.catch(err=>console.log(err));
app.use('/api/items', items);

const port=process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on PORT ${port}`));
