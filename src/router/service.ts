import Koa from "koa"
import Router from "koa-router"
// import kb from "koa-body"


const router = new Router({ prefix: "/lfp" })

// 单个值
router.get("/tt", ctx => {
    console.log("ttttttttttt")
    ctx.status = 201
})

new Koa()
    .use(router.routes())
    .listen(3000, () => console.log("listen at 3000"))