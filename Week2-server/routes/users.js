const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const model = require('../models/users');
const { validateUser } = require('../controllers/validation'); // Import our checker
const prefix = '/api/v1/users';
const router = new Router({ prefix: prefix });
// Routes
// We insert 'validateUser' BEFORE 'createUser'
// If validation fails, createUser never runs.
router.post('/', bodyParser(), validateUser, createUser);
router.get('/:id', getById);
async function createUser(ctx) {
    const body = ctx.request.body;

    // Try to add to DB
    try {
        const result = await model.add(body);
        if (result.affectedRows) {
            const id = result.insertId;
            ctx.status = 201;
            ctx.body = { ID: id, created: true, link: `${ctx.request.path}/${id}` };
        }
    } catch (err) {
        // Handle duplicates (Unique constraint violation)
        if (err.code === 'ER_DUP_ENTRY') {
            ctx.status = 409; // Conflict
            ctx.body = { message: "Username or Email already exists." };
        } else {
            throw err;
        }
    }
}

async function getById(ctx) {
    const id = ctx.params.id;
    const result = await model.getById(id);
    if (result.length) {
        const user = result[0];
        // IMPORTANT: Never send the password back, even the hash!
        delete user.password;
        delete user.passwordSalt;
        ctx.body = user;
    }
}

module.exports = router;