import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './Routes';

const app = express();

app.use(cors());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('##### Server started #####');
});

app.use(express.static(path.join(__dirname, 'web', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
