import * as express from 'express';
import * as bodyParser from 'body-parser';

import accountRoute from './routes/accountRoute';
import dbConnection from './models/dbConnection';

require.main === module && dbConnection();

const PORT = 8080;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Account microservice is running' });
});

app.use('/', accountRoute);

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export { server, app };
