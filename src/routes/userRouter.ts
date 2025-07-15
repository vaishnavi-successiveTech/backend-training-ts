import express from 'express';
import { Router } from 'express';
import { createUser, dataValidate, getUsers } from '../controllers/userController';
import { validateUserJwt, validateUsers } from '../middleware/validateUser';
import { validateJwt } from '../controllers/authController';
import { logger } from '../middleware/logger';

const router=Router();

router.post("/loginV",logger,validateUsers,dataValidate);
router.get('/userdetails',logger,getUsers);
router.post("/postdata" ,createUser);
router.post("/login",validateUsers,dataValidate);
router.post('/loginData',validateUsers,validateJwt);
router.get("/loginjwt",validateUserJwt);
export { router };