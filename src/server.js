import Koa from 'koa';
import Router from '@koa/router';
import staticFiles from 'koa-static';
import { nodeResolve } from 'koa-node-resolve';
import { RenderResultReadable } from '@lit-labs/ssr/lib/render-result-readable.js';

import { renderIndex } from './pages/index.js';

const app = new Koa();
const router = new Router();

const data = [];
for (var i = 0; i < 10000; i ++) {
  data.push(i);
}

router.get('/', (ctx) => {
  ctx.type = 'text/html';
  ctx.body = new RenderResultReadable(renderIndex({ name: 'Friend', data: data }));
});

app.use(router.routes());
app.use(nodeResolve());
app.use(staticFiles('.'));
app.listen(3000);
