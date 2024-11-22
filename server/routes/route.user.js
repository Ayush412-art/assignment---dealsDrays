import express from "express";
import   userLogin   from "../controllers/loginControllers.js";
import  userSignin  from "../controllers/signinControllers.js";

const router = express.Router();

router.post("/signin" , userSignin);

router.post("/login" , userLogin);

export default router;