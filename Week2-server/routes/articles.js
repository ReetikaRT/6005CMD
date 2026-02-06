// routes/articles.js
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
// Prefix means all routes here start with /api/v1/articles
const router = new Router({ prefix: '/api/v1/articles' });
let articles = [
    { title: 'Hello World', fullText: 'This is my first article from Koa!' },
    { title: 'Vue is cool', fullText: 'We will learn Vue next week.' },
    { title: 'Refactored', fullText: 'We moved this to a separate file.' }
];
// Routes
router.get('/', getAll);
router.post('/', bodyParser(), createArticle); // We will build this next
// Handlers
function getAll(ctx) {
    ctx.body = articles;
}
function createArticle(ctx) {
    const { title, fullText } = ctx.request.body;
    // Simple validation
    if (!title || !fullText) {
        ctx.status = 400;
        ctx.body = { message: "Title and fullText are required" };
        return;
    }
    const newArticle = { title, fullText };
    articles.push(newArticle);
    ctx.status = 201; // Created
    ctx.body = { message: "Created", article: newArticle };
}
module.exports = router;
