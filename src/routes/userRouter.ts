import express from 'express';
import { Router } from 'express';
import { createUser, dataValidate, getUsers } from '../controllers/userController';
import { validateUserJwt, validateUsers } from '../middleware/validateUser';
import { validateJwt } from '../controllers/authController';
import { logger } from '../middleware/logger';

const router=Router();


router.get('/userdetails',logger,getUsers); // mock data call.
router.post("/postdata" ,logger,createUser); // without jwt check validation
router.post('/login',logger,validateUsers,validateJwt); // generate jwt 
router.get("/secure",validateUserJwt); // verify jwt 

export { router };