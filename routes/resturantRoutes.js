const express = require('express');
const authMiddleware = require("../middlewares/authMiddleware");
const { resturantController, getAllResturantController, getResturantById, deleteResturantController } = require('../controllers/resturantController');
const router = express.Router();

//Creat resturant
router.post('/create', authMiddleware, resturantController)

//Get all resturants || GET
router.get('/getAll', getAllResturantController)

//Get resturant by id
router.get('/get/:id', getResturantById)

//Delete
router.delete('/delete/:id', authMiddleware, deleteResturantController)
module.exports = router;