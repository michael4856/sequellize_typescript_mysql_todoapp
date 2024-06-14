const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rout = require('./routes/router');
const cors = require('cors')
const User = require('./models').User;

const app = express();
const PORT = 3001;

app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express({extended:true}))
app.use(rout)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
