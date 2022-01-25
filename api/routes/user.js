const express = require('express')
const router = express.Router()
const User = require('../models/User')
const verify = require('../verifyToken')
const CryptoJS = require('crypto-js');

// ================User CRUD  operations ================



// ----------------------Find a User ----------------
router.get('/', async (req, res) => {
    const userId = req.query.userId
    const username = req.query.username

    try {
        // TODO: Fix Find all and password issue 
        const reqUser = userId ? await User.findById(userId) : await User.findOne({ username: new RegExp(username, 'i') })
        const { password, ...otherInfo } = reqUser._doc
        res.status(200).json(otherInfo)

    } catch (error) {
        res.status(500).json(error)
    }

})




// ------------------------Find All User ---------------

router.get('/all', verify, async (req, res) => {

    // TODO: Fix show password issue 
    if (req.user.isAdmin) {
        try {
            const allUsers = await User.find()
            res.status(200).json(allUsers)
        } catch (error) {
            res.status(500).json('Internal server error!!')
        }
    }
    else {
        res.status(500).json('You dont have access to the data')
    }
})



// --------------------- Update a user ----------------

router.put('/update/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            if (req.body.password) {
                req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRETE_MESSAGE).toString()
            }

            await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            // Todo: Fix the password display 
            res.status(200).json('User Information is updated successfully!! ')
        } catch (error) {
            res.status(500).json('Internal server error!!')
        }
    }
    else {
        res.status(500).json('You dont have access to perform this action')
    }
})




// --------------------- Delete a user ----------------

router.delete('/delete/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('User deleted succeessfully!!')
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(405).json('You are not allowed to temper with the data')
    }
})



module.exports = router