import * as cors from 'kcors';
import * as koa from 'koa';
import * as koaBody from 'koa-bodyparser';
import * as logger from 'koa-logger';
import { PORT, SERVER } from './config';
import * as router from './routes';

const app = new koa();

app.use(koaBody());

app.use(cors());

app.use(logger());

router.init(app);

// tslint:disable-next-line:no-console
app.listen(PORT, () => console.log(`Graphql API server running on ${SERVER}:${PORT}.`));
