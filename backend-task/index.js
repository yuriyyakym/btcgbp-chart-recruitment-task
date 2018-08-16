const express = require('express');
const router = require('./router');

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(router);

app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  console.log(`Api is available under ${HOST}:${PORT}`)
});
