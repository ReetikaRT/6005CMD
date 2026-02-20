const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const db = require('../helpers/database'); // Import our new helper
const router = new Router({ prefix: '/api/v1/articles' });
// DELETE the "let articles = [...]" array. We don't need it anymore.
router.get('/', getAll);
router.post('/', bodyParser(), createArticle);
// Updated Handler: Get All
async function getAll(ctx) {
    // OLD: ctx.body = articles;

    // NEW: Fetch from DB
    // We use 'await' because the DB takes time to respond
    const query = "SELECT * FROM articles";
    const data = await db.run_query(query);

    ctx.body = data;
}
// Updated Handler: Create
async function createArticle(ctx) {
    const { title, fullText } = ctx.request.body;

    // OLD: articles.push(newArticle);
    // NEW: Insert into DB
    // We use ? as a placeholder. The library safely injects the values.
    const query = "INSERT INTO articles SET ?";
    const result = await db.run_query(query, { title, fullText });

    ctx.status = 201;
    ctx.body = {
        ID: result.insertId, // The DB gives us the new ID automatically
        created: true
    };
}
module.exports = router;