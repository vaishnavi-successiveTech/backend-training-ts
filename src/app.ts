// import express, { Request, Response } from 'express';
// import { users } from './mockData';

// const app = express();
// const PORT = 3000;

// app.get('/api/users', (req: Request, res: Response) => {
//   res.json(users);
// });

// app.listen(PORT, () => {
//   console.log(`Express API running at http://localhost:${PORT}/api/users`);
// });

import express from 'express';
import dotenv from 'dotenv';
import { router } from "./routes/userRouter";
import { errorHandler } from './middleware/errorHandle';

import { CustomHeader } from './middleware/CustomHeader';

import { ErrorMiddleWare } from './middleware/errorMiddleware';
import { connnection } from './config/db';
import { countryRoute } from './routes/CountryRoutes';
import seedCountries from './modules/country/seedCountries';
import { basicLimiter } from './middleware/ratelimiter';



dotenv.config();

const errorHandle=new ErrorMiddleWare();
const app = express();
const PORT = 3000;
const limit=5;

const custom=new CustomHeader(); //
app.use(basicLimiter(limit, 60000));
app.use(express.json());
app.use(custom.customHeader("created-by",'vaishnavi'))
// app.use(logger); // custom middleware for timestamp
app.use("/api", router);
// app.use("/error",dynamicError);
app.use("/country",countryRoute);
app.use(errorHandle.errorHandleMiddleware);

app.use(errorHandler); // Called for all errors, including 404, 422, 500
// app.listen(PORT, () => {
//   console.log(` Server is running on port ${PORT}`);
// });
// connnection().then(()=>{
//   app.listen(3000,()=>{
//     console.log("app is running on port 3000");
//   })
// })
connnection()
  .then(async () => {
    await seedCountries();
    app.listen(PORT, () => {
      console.log( `Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err);
  });
