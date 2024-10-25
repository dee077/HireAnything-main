const express = require("express");
const { contact, allQueries } = require("../controllers/contectControllers");


const router = express.Router();  // Fix: Use Router() and correct the typo

// Define routes
router.post('/contact', contact);
router.get('/allQueries', allQueries);

module.exports = router;
