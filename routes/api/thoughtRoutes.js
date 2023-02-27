const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');
const { route } = require('./userRoutes');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId
router.route('/:userId').get(getSingleThought);

// /api/thoughts/:thoughtId/reactions
route.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction)

module.exports = router;