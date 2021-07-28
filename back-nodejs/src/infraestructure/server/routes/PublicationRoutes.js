const express = require('express');
let router = express.Router();
const {createPublication, listPublications, removePublication} = require('../controller/PublicationController');


router.post('/publication', createPublication)
router.get('/publication', listPublications)
router.delete('/publication/:id', removePublication)

module.exports =router