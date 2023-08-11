import axios from 'axios';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { ConnectOptions } from 'mongoose';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { app, server } from '../../src';
import { AddressInfo } from 'net';

let mongoServer: MongoMemoryServer;
let baseUrl: string;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  await mongoServer.start(); // Start the server instance

  const mongoUri = mongoServer.getUri(); // Get the URI after the instance has started
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  const address = server.address() as AddressInfo;
  baseUrl = `http://127.0.0.1:${address.port}`;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
  server.close();
});

describe('Axios API Test with Database Connection', () => {
  test('GET / should return "Account microservice is running"', async () => {
    const response = await axios.get(`${baseUrl}`);
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Account microservice is running');
  });

  test('GET /api/accounts should return the newly created account', async () => {
    const account = {
      Email: 'hello',
      Password: 'hello',
      Phone: 'hello',
    };
    const response = await axios.post(`${baseUrl}/api/accounts`, account);
    expect(response.status).toBe(200);
    expect(response.data.Email).toBe('hello');
    expect(response.data.Password).toBe('hello');
    expect(response.data.Phone).toBe('hello');
  });

  test('POST /api/accounts should return "Internal Server Error" on error', async () => {
    expect.assertions(2); // Expecting two assertions within the test

    const account = {
      Email: 'hello',
      Password: 'hello',
      Phone: 'hello',
    };

    await axios.post(`${baseUrl}/api/accounts`, account).catch((error) => {
      expect(error.response.status).toBe(500);
      expect(error.response.data.message).toBe('Internal Server Error');
    });
  });
});
