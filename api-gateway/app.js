const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();
app.use(cors());

// Проксирование запросов к User Service
app.use('/users', proxy('http://localhost:3000', {
  proxyReqPathResolver: (req) => {
    return `/users${req.url}`;
  }
}));

app.listen(4000, () => console.log('API Gateway running on port 4000'));