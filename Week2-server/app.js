// app.js
const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();
const articles = require('./routes/articles.js');
const users = require('./routes/users.js');

app.use(cors());
app.use(articles.routes());
app.use(users.routes());

app.listen(3000);

console.log('Server running on port 3000');

