const Koa = require('koa');
const app = new Koa();
// Middleware 1: Logger
app.use(async (ctx, next) => {
 const start = Date.now();
 await next(); // Wait for the next function to finish
 const ms = Date.now() - start;
 console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// Middleware 2: Router (Manual for now)
app.use(async (ctx) => {
 // ctx = Context (combines req and res into one object)

 if (ctx.path === '/') {
 ctx.body = '<h1>Welcome to Koa</h1><p>This is HTML</p>';
 } else if (ctx.path === '/about') {
 ctx.body = '<h1>About</h1><p>We are building a blog.</p>';
 } else {
    ctx.status = 404;
 ctx.body = '<h1>404 Not Found</h1>';
 }
});
app.listen(3000);
console.log('Koa server running on port 3000');