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
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)


router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;