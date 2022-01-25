const express = require('express')
const router = express.Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken')


//=========================== Register Users :: Do not require jwt authentication ===============================
router.post('/register', async (req, res) => {
    const encryptedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.SECRETE_MESSAGE).toString();
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: encryptedPassword
    })
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
})


//=========================== Login ===============================

router.post('/login', async (req, res) => {
    try {
        const reqUser = await User.findOne({ email: req.body.email })
        !reqUser && res.status(404).json('User with this credentials not found')
        // :: Check password
        if (req.body.password === CryptoJS.AES.decrypt(reqUser.password, process.env.SECRETE_MESSAGE).toString(CryptoJS.enc.Utf8)) {
            const jwt_data = {
                id: reqUser._id,
                isAdmin: reqUser.isAdmin
            }
            const authTokken = jwt.sign(jwt_data, process.env.JWT_TOKKEN, { expiresIn: "5d" })

            const { password , ...otherInfo } = reqUser._doc
            res.status(200).json({otherInfo, authTokken})
        }
        else {
            res.status(404).json('Invalid credentials')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router