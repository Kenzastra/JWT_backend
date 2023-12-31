import express from "express";
import {
    Login,
    Logout,
    Register,
    getUsers
    // getUsersById
} from "../controllers/Users.js";

import {
    verifyToken
} from "../middleware/VerifyToken.js";

import {
    refreshToken
}from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken,getUsers);
// router.get('/users/:email', getUsersById);
router.post('/users', Register);
router.post('/login',Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;