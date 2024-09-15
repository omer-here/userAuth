import { Router } from "express";
import {
    loginUser, 
    logoutUser, 
    registerUser, 
    refreshAccessAndrefreshToken,
    changeUserPassword,
    updateUserDetails
} from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAccessAndrefreshToken)
router.route("/change-password").post(verifyJWT, changeUserPassword)
/* In HTTP, a PATCH request is used to apply partial modifications to a resource. Unlike PUT, which generally replaces the entire resource, PATCH allows you to update only the parts of the resource that you specify, leaving the rest of the resource unchanged.*/
router.route("/update-account").patch(verifyJWT, updateUserDetails)

export default router