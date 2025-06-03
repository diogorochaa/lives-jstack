import express from 'express';
import { makeSignInController } from '../factories/makeSignInController';
import { makeSignUpController } from '../factories/makeSignUpController';
import { routeAdapter } from './adapters/routeAdapter';

const app = express();

app.use(express.json());

app.post('/sign-in', routeAdapter(makeSignInController()));

app.post('/sign-up', routeAdapter(makeSignUpController()));

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
