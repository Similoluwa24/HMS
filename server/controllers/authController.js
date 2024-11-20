const User = require('../models/user');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const bcrypt = require('bcryptjs');
const crypto = require('crypto')
const dotenv = require('dotenv');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const  cloudinary  = require('../utils/cloudinary');

dotenv.config()


// exports.signup = catchAsyncErrors(async (req, res, next) => {
//     const {
//       first_name, last_name, email, gender, dob, password, confirmPassword, role,
//       phone, photo, departments, address, school, NHIS,genotype,btype
//     } = req.body;
    
    
  
//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }
  
//     let photoUrl = '';
//     if (photo) {
//       const uploadResponse = await cloudinary.uploader.upload(`data:${file.mimetype};base64,${file.buffer.toString("base64")}`)
//       images.push({ img: result.secure_url })
//       photoUrl = uploadResponse.secure_url;
//     }
  
//     const hashedPassword = await bcrypt.hash(password, 12);
//     const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

//     const newUser = await User.create({
//       first_name, last_name, email, gender, password: hashedPassword, dob, role, phone,
//       departments, address, school, NHIS,genotype,btype, photo: photoUrl, verificationToken,
//       verificationExpire: Date.now() + 24 * 60 * 60 * 1000,
//     });
  
//     sendToken(newUser, 200, res);
  
//     const message = `Welcome to OJ Hospital. Thank you for choosing us. Your Verification Token is ${verificationToken} and it expires in 24 hours.`;
//     try {
//       await sendEmail({
//         email: newUser.email,
//         subject: 'OJ Hospital Verification',
//         message,
//       });
//     } catch (error) {
//       console.log('Email failed to send:', error);
//     }
//   });

// Updated signup controller
exports.signup = catchAsyncErrors(async (req, res, next) => {
    const {
      first_name, last_name, email, gender, dob, password, confirmPassword, role,
      phone, departments, address, school, NHIS, genotype, btype
    } = req.body;
  
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
  
    let photoUrl = '';
    if (req.file) {
      photoUrl = req.file.path; // URL provided by multer with Cloudinary
    }
  
    const hashedPassword = await bcrypt.hash(password, 12);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
  
    const newUser = await User.create({
      first_name, last_name, email, gender, password: hashedPassword, dob, role, phone,
      departments, address, school, NHIS, genotype, btype, photo: photoUrl, verificationToken,
      verificationExpire: Date.now() + 24 * 60 * 60 * 1000,
    });
  
    sendToken(newUser, 200, res);
  
    const message = `Welcome to OJ Hospital. Thank you for choosing us. Your Verification Token is ${verificationToken} and it expires in 24 hours.`;
    try {
      await sendEmail({
        email: newUser.email,
        subject: 'OJ Hospital Verification',
        message,
      });
    } catch (error) {
      console.log('Email failed to send:', error);
    }
  });
  

exports.login = catchAsyncErrors(async (req, res, next) => {
    const {email, password} = req.body;
    // check if the user or password is valid
    if (!email) {
        return next(new ErrorHandler('Please Enter Email And Password', 400))
    }
    // //finding user in database
    const user = await User.findOne({email})
    //Incorrect Email
    if (!user) {
        return next(new ErrorHandler('Please Enter Valid Email', 401))
    }
    const validatePassword = await bcrypt.compare(password, user.password)
    if (!validatePassword) {
        return next(new ErrorHandler('Please Enter Valid  Password', 401))
    }
   sendToken(user,200,res)
   console.log(req.user);
   
    
})

// exports.logout = catchAsyncErrors(async (req, res, next) => {
//     // Set the 'user' header to an empty string to "log out"
//     res.set("user", ""); // Use 'set' to add a header

//     // // Clear any necessary token in the headers (if required)
//     // res.set("token", ""); // Clear the token as well

//     // Send the response
//     res.status(200).json({
//         status: "success",
//         message: "Logged Out"
//     });
// });


exports.logout = catchAsyncErrors(async (req, res, next) => {
    // Clear the token from cookies
    res.cookie("token", "", {
        expires: new Date(Date.now()), // Set an expired date
        httpOnly: true, // Ensure it's an HTTP-only cookie
        secure: process.env.NODE_ENV === 'production' // Set secure flag if in production
    });
    // Send success response
    res.status(200).json({
        status: "success",
        message: "Logged Out"
    });
});



exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    //first we confirm if the password user filled is in db
    const user = await User.findOne({email:req.body.email})
    //if the email isnt in the db
    if (!user) {
       return next(new ErrorHandler('User Not Found', 404))
    }
    //if user exist
    const resetToken = user.getResetToken()
    await user.save({validateBeforeSave:false})
    //create reset url
    const resetUrl = `${req.protocol}://localhost:5173/auth/resetPwd/${resetToken}`

    //message to be sent to client with the token to reset password
    const message = `You have made a request to reset your password. you password reset token
     is \n\n${resetUrl}\n\n If you have not requested to reset your password, Kindly ignore this mail`

    try {
        await sendEmail({
            email: user.email,
            subject:'OJ HOSPITAL PASSWORD RECOVERY MESSAGE',
            message
        })
        res.status(200).json({
            status:"success",
            message:`Email has been sent to ${user.email}`
        })
    } catch (error) {
        console.log(error); 
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({validateBeforeSave:false})
        return next(new ErrorHandler('Email could not be sent', 500));  // Handle error response
    }
})

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    console.log('Reset Token:', req.params.token);
    console.log('Hashed Reset Token:', resetPasswordToken);

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
        return next(new ErrorHandler('The reset Token is either Invalid or Expired', 400));
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Passwords do not match', 401));
    }

    // Hash the new password before saving
    user.password = await bcrypt.hash(req.body.password, 12);

    // Clear the reset token and expiration
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    // Save the updated user with the new hashed password
    await user.save();

    // Send token to log in the user after resetting password
    sendToken(user, 200, res);
});

exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const {oldpassword,newpassword} = req.body
    const user = await User.findById(req.user.id)

    const isMatched = await bcrypt.compare(oldpassword, user.password)

    if (!isMatched) {
        return next( new ErrorHandler('Your Old Password is Incorrect', 401))
    }
    user.password = await bcrypt.hash(newpassword,12)
    await user.save()
    sendToken(user, 200, res)
})

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findByIdAndUpdate(req.user.id, req.body,{
        runValidators:true,
        new:true
    })
    console.log(req.user.id);
    
    res.status(200).json({
        status:"success",
        user
        
    })
})

// exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
//     // Log to confirm `req.user` before the update
//     console.log('Req user before update:', req.user);

//     const update = await User.findByIdAndUpdate(req.user._id, req.body, {
//         runValidators: true,
//         new: true,
//     });

//     if (!update) {
//         return res.status(404).json({
//             status: "error",
//             message: "User not found"
//         });
//     }

//     res.status(201).json({
//         status: "success",
//         user:update
//     });
// });



exports.checkMiddleware = catchAsyncErrors( async(req, res)=>{
    res.status(200).json({
        message: 'Middleware works',
        user: req.user
    });
})
exports.getAllUsers = catchAsyncErrors( async(req, res)=>{
       const users = await User.find()
       res.status(200).json({
        status:"success",
        count: users.length,
        users
       })
})

exports.getUserbyId = catchAsyncErrors( async(req, res)=>{
       const users = await User.findById(req.params.id)

       if (!users) {
        return next(new ErrorHandler('User not found', 404))
       }
       res.status(200).json({
        status:"success",
        count: users.length,
        users
       })
})

exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id)
    console.log(user);
    
    res.status(200).json({
        status:"success",
        user
    })
})
//admin
exports.updateProfileAdmin = catchAsyncErrors(async (req, res, next) => {
    const newData = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        gender:req.body.gender,
        dob:req.body.dob,
        role:req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, newData,{
        runValidators:true,
        new:true,
        useFindAndModify:false
    })
    res.status(200).json({
        status:"success",
        user
    })
})

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id)
    
    if (!user) {
        return next(new ErrorHandler('User not found', 404))
    }
    
    await user.deleteOne()

    res.status(200).json({
        status: 'success',
        message: 'deleted'
    })
})
