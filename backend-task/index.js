const express = require('express');
const cors = require('cors');
const router = require('./router');

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const isProduction = process.env.NODE_ENV === 'production';

const corsOptions = {
  origin: isProduction
    ? process.env.ORIGINS.split(',')
    : '*'
};

const app = express();

app.use(cors(corsOptions));
app.use(router);

app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  console.log(`Api is available under ${HOST}:${PORT}`)
});
