const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
 const url = ctx.path;
 if (url === '/api/v1/articles') {
 // We return an Object or Array, not a string
 ctx.body = [
 { id: 1, title: "Hello World", author: "Student" },
 { id: 2, title: "Koa is great", author: "Teacher" }
 ];
 } else {
 ctx.status = 404;
 ctx.body = { error: "Endpoint not found" };
 }
});
app.listen(3000);
console.log('API server running on port 3000');