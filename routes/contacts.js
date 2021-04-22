const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all contacts
// @access Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route  POST api/contacts
// @desc   Add contact
// @access Private
router.post('/', (req, res) => {
  res.send('Add Contact');
});

// @route  PUT api/contacts/:id
// @desc   Update a contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('update a contact');
});

// @route  PUT api/contacts/:id
// @desc   Update a contact
// @access Private
router.delete('/:id', (req, res) => {
  res.send('delete a contact');
});

module.exports = router;
