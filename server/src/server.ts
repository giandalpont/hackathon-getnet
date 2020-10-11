import express from 'express';
import routes from './Routes';

const app = express();

app.use(routes);

app.listen(3030, () => {
  console.log('##### Server started #####');
});
