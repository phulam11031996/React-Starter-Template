import axios from 'axios';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { ConnectOptions } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { app, server } from '../../src';
import { AddressInfo } from 'net';
import { CREATE_201, INTERNAL_ERROR_500, NOT_FOUND_404, OK_200 } from '../../src/common/httpCode';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let account1: any;
const doesNotExist = '64dd762315cb7e0466121794';
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

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

beforeEach(async () => {
  account1 = await axios.post(`${baseUrl}/api/accounts`, { email: 'email1@gmail.com', password: 'password1' });
  await axios.post(`${baseUrl}/api/accounts`, { email: 'email2@gmail.com', password: 'password2' });
  await axios.post(`${baseUrl}/api/accounts`, { email: 'email3@gmail.com', password: 'password3' });
});

describe('Test Database Connection', () => {
  test('GET / should return "Account microservice is running"', async () => {
    const response = await axios.get(`${baseUrl}`);
    expect(response.status).toBe(OK_200);
    expect(response.data.message).toBe('Account microservice is running');
  });
});

describe('Testing GET on Account Model', () => {
  test('GET /api/accounts should return 200, 3 accounts in the database', async () => {
    const response = await axios.get(`${baseUrl}/api/accounts`);
    expect(response.status).toBe(OK_200);
    expect(response.data.length).toBe(3);
  });
});

describe('Testing GET by Id on Account Model', () => {
  test('GET /api/accounts/{id} should return 200, found', async () => {
    const response = await axios.get(`${baseUrl}/api/accounts/${account1.data._id}`);
    expect(response.status).toBe(OK_200);
    expect(response.data._id).toBe(account1.data._id);
    expect(response.data.email).toBe(account1.data.email);
  });

  test('GET /api/accounts/{id} should return 404, not found', async () => {
    await axios.post(`${baseUrl}/api/accounts/${doesNotExist}`).catch((error) => {
      expect(error.response.status).toBe(NOT_FOUND_404);
    });
  });
});

describe('Testing POST on Account Model', () => {
  test('POST /api/accounts should return the newly created account', async () => {
    const account = {
      email: 'validemail@gmail.com',
      password: 'validpassword',
    };
    const response = await axios.post(`${baseUrl}/api/accounts`, account);
    expect(response.status).toBe(CREATE_201);
    expect(response.data.email).toBe('validemail@gmail.com');
  });

  test('POST /api/accounts should return status 500; invalid email', async () => {
    const account = {
      email: 'invalidemail',
      password: 'validpassword',
    };
    await axios.post(`${baseUrl}/api/accounts`, account).catch((error) => {
      expect(error.response.status).toBe(INTERNAL_ERROR_500);
      expect(error.response.data.message).toBe('Internal Server Error');
    });
  });

  test('POST /api/accounts should return status 500; invalid password', async () => {
    const account = {
      email: 'validemail@gmail.com',
      password: 'short',
    };
    await axios.post(`${baseUrl}/api/accounts`, account).catch((error) => {
      expect(error.response.status).toBe(INTERNAL_ERROR_500);
      expect(error.response.data.message).toBe('Internal Server Error');
    });
  });

  test('POST /api/accounts should return status 500; duplicated email', async () => {
    const account = {
      email: 'duplicatedemail@gmail.com',
      password: 'validpassword',
    };

    await axios.post(`${baseUrl}/api/accounts`, account);
    await axios.post(`${baseUrl}/api/accounts`, account).catch((error) => {
      expect(error.response.status).toBe(INTERNAL_ERROR_500);
      expect(error.response.data.message).toBe('Internal Server Error');
    });
  });
});

describe('Testing DELETE on Account Model', () => {
  test('DELETE /api/accounts should return 204, found and deleted an account', async () => {
    await axios.delete(`${baseUrl}/api/accounts/${account1.data._id}`);
    const response = await axios.get(`${baseUrl}/api/accounts`);
    expect(response.data.length).toBe(2);
  });

  test('DELETE /api/accounts should return 204, not found', async () => {
    await axios.delete(`${baseUrl}/api/accounts/${doesNotExist}`);
    const response = await axios.get(`${baseUrl}/api/accounts`);
    expect(response.data.length).toBe(3);
  });
});

describe('Testing PUT on Account Model', () => {
  test('PUT /api/accounts/{id} should return 200, found and updated an account', async () => {
    const updatedEmail = 'updatedemail@gmail.com';
    const updatedPassword = 'updatedpassword';
    await axios.put(`${baseUrl}/api/accounts/${account1.data._id}`, { email: updatedEmail, password: updatedPassword });
    const response = await axios.get(`${baseUrl}/api/accounts/${account1.data._id}`);
    expect(response.data.email).toBe(updatedEmail);
    expect(account1.data.password).not.toBe(response.data.password);
  });

  test('PUT /api/accounts/{id} should return 404, not found', async () => {
    const updatedEmail = 'updatedemail@gmail.com';
    const updatedPassword = 'updatedpassword';
    await axios
      .put(`${baseUrl}/api/accounts/${doesNotExist}`, { email: updatedEmail, password: updatedPassword })
      .catch((error) => {
        expect(error.response.status).toBe(NOT_FOUND_404);
      });
  });
});
