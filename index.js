require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/', {useNewUrlParser: true})
.then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});
