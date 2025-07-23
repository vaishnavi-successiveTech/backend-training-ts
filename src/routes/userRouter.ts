import express from 'express';
import { Router } from 'express';
import { createUser, dataValidate, getUsers } from '../controllers/userController';
import { validateUserJwt, validateUsers } from '../middleware/validateUser';
import { NextFunction,Request,Response } from 'express';
import { validateJwt } from '../controllers/authController';
import { logger } from '../middleware/logger';
import { validateSchema } from '../middleware/validateSchema';
import { validateform } from '../middleware/validateform';
import { validateParams } from '../middleware/validateParams';
import { geolocation } from '../middleware/geolocation';

import { checkDynamic } from '../middleware/validationRules';
import { asyncError } from '../controllers/asyncController';
import { asyncErrorRoute } from '../controllers/errorAsyncController';

const router=Router();


router.get('/userdetails',logger,getUsers); // mock data call.
router.post("/postdata" ,logger,createUser); // without jwt check validation
router.post('/login',logger,validateUsers,validateJwt); // generate jwt 
router.get("/secure",validateUserJwt); // verify jwt 

router.post("/validate",validateSchema,validateJwt);
router.post(
  "/student",
  checkDynamic,
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      message: " Successful login to student route",
    });
  }
);

router.post("/teacher",checkDynamic,(req:Request,res:Response,next:NextFunction)=>{
     res.status(200).json({
      success: true,
      message: " Successful login to student route",
    });
})
// form check validation
router.post("/validateform",validateform ,dataValidate);

router.get("/error-async",asyncError); // intentially error is thrown using errorHandler.
router.get("/error/async", asyncErrorRoute); // ques - 5
router.post('/register', validateSchema, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'User data is valid '
  });
});// validateSchema.ts has been checked only

router.post("/validateparam/:id",validateParams,validateSchema ,dataValidate);
router.get("/location",geolocation,(req, res) => {
  res.send(" You are allowed to access this route.");
});

export { router };