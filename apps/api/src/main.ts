/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { join } from 'path';
import { auth } from 'express-oauth2-jwt-bearer';
import { API_URL, ApiResponse } from '@nx-rename-me/api-interface';

const authConfig = require('./auth_config.json');

const app = express();

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.static(join(__dirname, 'public')));

const jwtCheck = auth({
  audience: authConfig.audience,
  issuerBaseURL: `https://${authConfig.domain}`,
  tokenSigningAlg: 'RS256',
});

// enforce on all endpoints
//app.use(jwtCheck);

app.get('/api/welcome', (req, res) => {
  res.send({ message: 'Welcome to api!' } as ApiResponse);
});

// This route doesn't need authentication
app.get('/api/public', function (req, res) {
  res.json({
    message:
      "Hello from a public endpoint! You don't need to be authenticated to see this.",
  } as ApiResponse);
});

// This route needs authentication
app.get('/api/private', jwtCheck, function (req, res) {
  res.json({
    message:
      'Hello from a private endpoint! You need to be authenticated to see this.',
    token: req.auth.token,
  } as ApiResponse);
});

// This route needs authentication with a specific scope
// app.get('/api/private-scoped', jwtCheck, auth(['read:messages']), function(req, res) {
//   res.json({
//       message: 'Hello from a private scoped endpoint! You need to be authenticated and have a scope of read:messages to see this.'
//   });
// });

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
