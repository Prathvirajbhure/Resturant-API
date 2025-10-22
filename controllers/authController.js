
const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

//Register
const registerContoller = async (req, res) => {
    try {
        const { username, email, phone, password, address, answer } = req.body
        //validation
        if (!username || !email || !phone || !password || !address || !answer) {
            return res.status(500).send({
                success: false,
                message: 'Please Provide All The Fields'
            })
        }
        //check user 
        const existing = await userModel.findOne({ email })
        if (existing) {
            return res.status(500).send({
                success: false,
                message: 'Email already registered try with new email or please login with existing'
            })
        }
        //hashing
        var salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hash(password, salt)

        //create
        const user = await userModel.create({
            username,
            email,
            password: hashPassword,
            address,
            phone,
            answer,
        })

        res.status(201).send({
            success: true,
            message: 'Successfully Registered',
            user,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Register API',
            error
        })



    }
}

//login
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        //validation
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: 'Please Provide Email Or Password'
            })
        }

        //check user 

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found '
            })
        }
        //user password || compare password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(500).send({
                status: false,
                message: "Invalid Credentials"
            })
        }
        //token
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        }
        );
        //user.password = undefined;
        res.status(200).send({
            success: true,
            message: 'Login Successfully',
            token,
            user
        })
    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: 'Error in Login APIs',
                error
            })
    }
}


module.exports = { registerContoller, loginController }