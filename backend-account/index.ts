import * as express from 'express';
import * as bodyParser from 'body-parser';

import accountRoute from './routes/accountRoute';

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, Express with TypeScript!');
});

app.use("/api", accountRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
