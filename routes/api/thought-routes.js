const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    removeReaction,
    updateThought
} = require('../../controllers/thought-controller');
const { update } = require('../../models/Thought');

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
    .put(updateThought)


router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;