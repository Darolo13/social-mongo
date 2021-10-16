const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

// /api/thoughts/:id
router
    .route('/')
    .get(getThoughtById)

module.exports = router;