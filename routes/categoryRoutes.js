const express = require('express');
const authMiddleware = require("../middlewares/authMiddleware");
const { createCatController, getAllCatController, updatecatController, deleteCatController } = require('../controllers/categoryController');

const router = express.Router();

//create
router.post('/create', authMiddleware, createCatController)

//get
router.get('/getAll', getAllCatController)

//update
router.put('/update/:id', authMiddleware, updatecatController)

//delete
router.delete('/delete/:id', authMiddleware, deleteCatController)
module.exports = router;