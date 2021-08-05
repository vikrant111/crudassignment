// QbFGOQNCttNbPKfE
const express = require('express');
const app = express();
const PORT=8000;
const mongoose = require('mongoose');
const {MONGOURI} = require('./config/keys');
const cors = require('cors');

mongoose.connect(MONGOURI , {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
	console.log('connected');
})
mongoose.connection.on('error',(err)=>{
	console.log('error',err);
})

require('./models/data');
app.use(express.json())
app.use(cors({ origin: true }));

app.use(require('./routes/data'));

app.listen(PORT, ()=> {
	console.log("App is running on ",PORT);
});