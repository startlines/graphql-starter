import * as koa from 'koa';
import * as logger from 'koa-logger';
import { PORT } from './config';
import { Log } from './helper';

const app = new koa();

app.use(logger());

app.listen(PORT, () => Log.log(`graphql server running at ${PORT} ports.`));
