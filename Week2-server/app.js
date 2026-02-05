const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();
app.use(bodyParser());
// Mock Data (Since we don't have a database yet)
let articles = [
    { title: 'Hello World', fullText: 'This is my first article from Koa!' },
    { title: 'Vue is cool', fullText: 'We will learn Vue next week.' }
];
// Define a Route
router.get('/api/v1/articles', (ctx) => {
    ctx.body = articles;
});
app.use(router.routes());
app.listen(3000);
console.log('Server running on port 3000');
