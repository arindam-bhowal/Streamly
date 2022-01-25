const express = require('express')
const router = express.Router()
const List = require('../models/List')
const verify = require('../verifyToken')

// ==================Creating a new List===================
router.post('/new', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const newList = new List(req.body)
            await newList.save()
            res.status(201).json(newList)
        } catch (error) {
            res.status(500).json('Internal server error!!')
        }
    }
    else {
        res.status(405).json('You are not allowed to perform this action')
    }
})


// ==================Deleteing a List===================
router.delete('/delete/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id)
            res.status(200).json('The list has been successfully deleted !!')
        } catch (error) {
            res.status(500).json('Internal server error!!')
        }
    }
    else {
        res.status(405).json('You do not have the access to perform this action')
    }
})


// ==================Updating a List===================
router.put('/update/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedList = await List.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedList)
        } catch (error) {
            res.status(500).json('Internal server error!!')
        }
    }
    else {
        res.status(405).json('You do not have the permission to update the data')
    }
})

// ==================Get List===================

router.get('/', async (req, res) => {
    const type = req.query.type
    const genre = req.query.genre
    let reqList
    try {
        if (type === 'series') {
            if (genre) {
                reqList = await List.aggregate([
                    { $match: { type: type, genre: genre } },
                    { $sample: { size: 1 } }
                ])
            }
            else {
                reqList = await List.aggregate([
                    { $match: { type: type } },
                    { $sample: { size: 1 } }
                ])
            }
        }
        else if(type==='movies') {
            if (genre) {
                reqList = await List.aggregate([
                    { $match: { type: type, genre: genre } },
                    { $sample: { size: 1 } }
                ])
            } else {
                reqList = await List.aggregate([
                    { $match: { type: type } },
                    { $sample: { size: 1 } }
                ])
            }
        }
        else{
            res.status(400).json('Bad request!!')
        }


        res.status(200).json(reqList)

    } catch (error) {
        res.status(500).json('Internal server error!!')
    }
})




module.exports = router