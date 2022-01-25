const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()
const Movie = require('../models/Movie')
const verify = require('../verifyToken')

// =================MOVIE CRUD OPERATIONS =================


// =======================Create====================
router.post('/new', verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body)
        try {
            await newMovie.save()
            res.status(200).json(newMovie)
        } catch (error) {
            res.json(500).json('Internal server error')
        }
    } else {
        res.status(405).json('You are not allowed to perform the action')
    }
})




// =======================Update====================
router.put('/update/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedMovie)
        } catch (error) {
            res.json(500).json('Internal server error')
        }
    } else {
        res.status(405).json('You are not allowed to perform the action')
    }
})



// =======================Delete==================== :::::FIXME

router.delete('/delete/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json('You have successfullt deleted the show!!')
        } catch (error) {
            res.json(500).json('Internal server error')
        }
    } else {
        res.status(405).json('You are not allowed to perform the action')
    }
})



// =======================Get a movie====================

router.get('/find/:id', verify, async (req, res) => {
    try {
        const reqMovie = await Movie.findById(req.params.id)
        res.status(200).json(reqMovie)
    } catch (error) {
        res.json(500).json('Internal server error')
    }
})

// =======================Get all movies ====================


// =======================Get random movie ====================
router.get('/random', verify, async (req, res) => {
    const type = req.query.type
    try {

        let randomShow

        if (type === 'series') {
            randomShow = await List.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ])
        }
        else {
            randomShow = await List.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
            ])
        }

        res.status(200).json(randomShow)

    } catch (error) {
        res.status(500).json('Internal server error')
    }
})




// =======================Get all movies ====================
router.get('/all', verify, async (req, res) => {
    const userId = req.query.userId
    if (req.user.id === userId || req.user.isAdmin) {
        const allMovies = await Movie.find()
        res.status(200).json(allMovies.reverse())
    }
    else {
        res.status(405).json('You are not allowed to perform the action')
    }
})



module.exports = router