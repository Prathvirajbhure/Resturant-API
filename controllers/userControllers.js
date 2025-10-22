//get user info
const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs')

//get user info
const getUserController = async (req, res) => {
    try {
        const user = await userModel.findById({ _id: req.user.id })
        //validation
        if (!user) {
            res.status(404).send({
                success: false,
                message: 'User Not Found'
            })
        }
        //hide password
        user.password = undefined
        //response
        res.status(200).send({
            success: true,
            message: 'User retrieved successfully',
            user
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error in API',
            error: error.message || error.toString()
        })
    }

}
//update user
const updateUserController = async (req, res) => {
    try {
        //find user
        const user = await userModel.findById({ _id: req.user.id })
        //validation 
        // extra gpt to solve schema problem
        //if (!user.answer) user.answer = req.body.answer || "defaultAnswer";
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            })
        }
        //update
        const { username, address, phone } = req.user;
        if (username) user.username = username;
        if (address) user.address = address;
        if (phone) user.phone = phone;
        //save user
        await user.save()
        res.status(200).send({
            success: true,
            message: 'User Updated successfullly'
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: 'Error In Update User API',
            error: error.message
        })
    }
}
//Gpt
// const updateUserController = async (req, res) => {
//     try {
//         const { username, address, phone } = req.body;

//         const updatedUser = await userModel.findByIdAndUpdate(
//             req.user.id,
//             { username, address, phone },
//             { new: true, runValidators: true }
//         );

//         if (!updatedUser) {
//             return res.status(404).send({
//                 success: false,
//                 message: 'User not found'
//             });
//         }

//         res.status(200).send({
//             success: true,
//             message: 'User updated successfully',
//             user: updatedUser
//         });

//     } catch (error) {
//         console.log(error);
//         res.status(400).send({
//             success: false,
//             message: 'Error in Update User API',
//             error: error.message
//         });
//     }
// };

//reset password
const resetPasswordController = async (req, res) => {
    try {
        const { email, newPassword, answer } = req.body
        //validation
        if (!email || !newPassword || !answer) {
            return res.status(500).send({
                success: false,
                message: "Please Provide all fields"
            })
        }
        const user = await userModel.findOne({ email, answer })
        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'user not found or invalid answer'
            })
        }
        //hashing
        var salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hash(newPassword, salt)
        user.password = hashPassword
        await user.save()
        res.status(200).send({
            success: true,
            message: "Password Updated Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in Reset password api",
            error
        })
    }
}

const updatePasswordController = async (req, res) => {
    try {
        //find user
        const user = await userModel.findById({ _id: req.user.id })
        //validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            })
        }
        //get data from user
        const { oldPassword, newPassword } = req.body
        if (!oldPassword || !newPassword) {
            return res.status(404).send({
                success: false,
                message: 'Please Provide old or new password'
            })
        }
        //check password || compare password
        const isMatch = await bcrypt.compare(oldPassword, user.password)
        if (!isMatch) {
            return res.status(500).send({
                status: false,
                message: "Invalid old password"
            })
        }

        //hashing new password
        var salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hash(newPassword, salt)
        user.password = hashPassword

        await user.save()
        res.status(200).send({
            success: true,
            message: "Password Updated!"
        })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error In Password update API',
            error
        })
    }

}

//Delete profile
const deleteUserController = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({
            success: true,
            message: "Your Account is successfully Deleted"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in delete user API"
        })
    }
}

module.exports = { getUserController, updateUserController, resetPasswordController, updatePasswordController, deleteUserController }