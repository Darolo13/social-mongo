const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    removeReaction,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)


// /api/thoughts/:thoughtId
router
    .route('/userId')
    .post(createThought)

// /api/thoughts/:id
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)


router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;