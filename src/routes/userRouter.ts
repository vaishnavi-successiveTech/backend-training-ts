import express, { Router, Request, Response, NextFunction } from 'express';
import { createUser, dataValidate, getUsers } from '../controllers/userController';
import { validateUserJwt, validateUsers } from '../middleware/validateUser';
import { validateJwt } from '../controllers/authController';
import { logger } from '../middleware/logger';
import { validateSchema } from '../middleware/validateSchema';
import { validateform } from '../middleware/validateform';
import { validateParams } from '../middleware/validateParams';
import { geolocation } from '../middleware/geolocation';
import { checkDynamic } from '../middleware/validationRules';
import { asyncError } from '../controllers/asyncController';
import { asyncErrorRoute } from '../controllers/errorAsyncController';

const router = Router();
                   
router.get('/userdetails',logger,getUsers); // mock data call.
router.post("/postdata" ,logger,createUser); // without jwt check validation
router.post('/login',logger,validateUsers,validateJwt); // generate jwt 
router.get("/secure",validateUserJwt); // verify jwt 

router.post('/validate', validateSchema, validateJwt);            // schema validation with JWT
router.post('/register', validateSchema, (req, res) => {          // only schema check
  res.status(200).json({
    success: true,
    message: 'User data is valid'
  });
});
router.post('/student', checkDynamic, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Successful login to student route'
  });
});
router.post('/teacher', checkDynamic, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Successful login to teacher route'
  });
});


router.post('/validateform', validateform, dataValidate);
router.post('/validateform/:id', validateParams, dataValidate);
router.post('/validateparam/:id', validateParams, validateSchema, dataValidate);

router.get('/location', geolocation, (req: Request, res: Response) => {
  res.send('You are allowed to access this route.');
});


router.get('/error-async', asyncError);              
router.get('/error/async', asyncErrorRoute);         


export { router };
