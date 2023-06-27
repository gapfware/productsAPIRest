require('dotenv').config();

const express = require('express');
const routerApi = require('./routes');
const app = express();

app.use(express.json()); // Recibir informacion de tipo json que me envian por post

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Express.js');
});

routerApi(app);

app.listen(port, () => {
  console.log(`PORT: ${port}`);
});
