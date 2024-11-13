const express = require('express');
const router = express.Router()
const authController = require('../controllers/authController');
const {isAuthenticated, isAdmin} = require('../middleware/auth')

router.post("/signup", authController.signup)
router.post("/login", authController.login)
router.get("/logout", authController.logout)
router.post("/forgotpwd", authController.forgotPassword)
router.put("/resetpwd/:token", authController.resetPassword)
router.get("/admin", authController.getAllUsers)
router.get("/admin/:id",isAuthenticated,isAdmin, authController.getUserbyId)
router.get("/me",isAuthenticated, authController.getUserProfile)
router.put("/updatepwd",isAuthenticated, authController.updatePassword)
router.put("/updateprofile",isAuthenticated, authController.updateProfile)
router.put("/admin/update/:id",isAuthenticated,isAdmin, authController.updateProfileAdmin)
router.delete('/delete/:id',authController.deleteUser)
router.get('/api/v1/test-auth', isAuthenticated, authController.checkMiddleware);

module.exports = router