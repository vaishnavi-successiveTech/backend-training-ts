import express from 'express';
import { Router } from 'express';
import {  ValidateUsers } from '../middleware/validateUser';
import { NextFunction,Request,Response } from 'express';
import { ValidateJwt } from '../controllers/authController';
import {  LoggerMiddleware } from '../middleware/logger';
import { SchemaValidation,  } from '../middleware/validateSchema';
import { Validate } from '../middleware/validateform';
import { ParamValidator } from '../middleware/validateParams';
import { GeoLocationMiddleware } from '../middleware/geolocation';

import { CheckDynamic,  } from '../middleware/validationRules';
import { AsyncError } from '../controllers/asyncController';
import { AsyncErrorRoute } from '../controllers/errorAsyncController';

import { HealthControls } from '../controllers/healthController';
import { UserController } from '../controllers/userController';
import { movieController } from '../modules/movies/controller/movieController';
import { movieSchema } from '../modules/movies/validateMovie';
import { validateUser } from '../modules/user/validateUser';
import { createUser } from '../modules/user/controller/user.controller';
import { verifyToken } from '../modules/user/verifyToken';
import { checkRole } from '../modules/user/checkRole';

const router=Router();
// const user=new userController();
const user = UserController.getInstance();

const health=new HealthControls();
const form =new Validate();
const val=new ValidateJwt()
const params=new ParamValidator();
const dynamic=new CheckDynamic();
const schema=new SchemaValidation();
const geo=new GeoLocationMiddleware();
const log=new LoggerMiddleware();
const valUsers=new ValidateUsers();
const asyncError=new AsyncErrorRoute();
const pError=new AsyncError();
// const   movieD   =new MovieController();
const valMovie=new movieSchema();

router.get('/userdetails',log.logRequest,user.getUsers.bind(user)); // mock data call.
router.post("/postdata" ,log.logRequest,user.createUser.bind(user)); // without jwt check validation
router.post('/login',log.logRequest,valUsers.validateUsers,val.validateJwt); // generate jwt 
router.get("/secure",valUsers.validateUserJwt); // verify jwt 
router.post("/validate",schema.validateSchema,val.validateJwt); // validateSchema  is used here .
router.post("/student",dynamic.validateDynamicSchema,(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).send("successful log in to student");
})
router.post("/teacher",dynamic.validateDynamicSchema,(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).send("successful log in teacher");
})
// form check validation
router.post("/validateform",form.validateform ,user.dataValidate.bind(user));
router.post("/validateform/:id",params.validateParams ,val.validateJwt,user.dataValidate.bind(user));

router.get("/location",geo.geolocation,(req, res) => {
  res.send(" You are allowed to access this route.");
});

router.get("/error-async",asyncError.asyncErrorRoute); // intentially error is thrown using errorHandler.
router.get("/error/async", pError.asyncError); // ques - 5
router.post('/register', schema.validateSchema, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'User data is valid '
  });
});// validateSchema.ts has been checked only

router.get("/heathCheck",health.healthCheck);
// mongoDb

router.post("/movies",valMovie.validateMovies,movieController.movieResult);
// for user assignment-10
router.post("/register",validateUser,createUser);
// for login
router.get("/userlogin", verifyToken, checkRole(["user", "admin"]), (req, res) => {
  res.send("Welcome User");
});
// router.get("/user-dashboard", verifyToken, checkRole(["user"]), (req, res) => {
//   res.send("Welcome User");
// });

// admin check
// router.get("/adminlogin", verifyToken, checkRole(["admin"]), (req, res) => {
//   res.send("Welcome Admin");
// });


export { router };

