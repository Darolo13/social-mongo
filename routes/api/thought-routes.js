const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)


router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)
module.exports = router;