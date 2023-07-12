import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// schema import
import { setUpDatabase } from './schema/createTables.js';

// routes import
import memberRouter from './routes/memberRoute.js';
import organizationRouter from './routes/organizationRoute.js';
import applicationRouter from './routes/applicationRoute.js';
import educationRouter from './routes/educationRoute.js';
import companyRouter from './routes/companyRoute.js';
import legalDependentsRouter from './routes/legalDependentsRoute.js';
import contactsRouter from './routes/contact.js';
import queryRouter from './routes/queryRoutes.js';

const PORT = process.env.PORT || 8080;

const app = express();

// middleware
app.use(express.json());

app.use((err, req, res, next) => {
  console.log('MIDDLEWARE');
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

// setup the database
setUpDatabase()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// ROUTERS
// ROOT PATH: /api
// api/member
app.use('/api', memberRouter);
app.use('/api', organizationRouter);
app.use('/api', applicationRouter);
app.use('/api', educationRouter);
app.use('/api', companyRouter);
app.use('/api', legalDependentsRouter);
app.use('/api', contactsRouter);
app.use('/api', queryRouter);

// CONNECTION
app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}...`);
});
