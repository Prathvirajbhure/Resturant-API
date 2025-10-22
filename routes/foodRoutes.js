const express = require('express');
const authMiddleware = require("../middlewares/authMiddleware");
const { createFoodController, getAllFoodController, getFoodByIdController, getFoodByResturantController, updateFoodController, deleteFood, deleteFoodController, placeOrderController, orderStatus, orderStatusController } = require('../controllers/foodControllers');
const adminMiddleware = require('../middlewares/adminMiddleware');
const router = express.Router();

//create food
router.post("/create", authMiddleware, createFoodController)

//get All food
router.get("/getAll", getAllFoodController)

//get food by id
router.get("/get/:id", getFoodByIdController)

//get food by id
router.get("/getByResturant/:id", getFoodByResturantController)

//update food
router.put("/update/:id", authMiddleware, updateFoodController)

//delete
router.delete("/delete/:id", authMiddleware, deleteFoodController)

//place order
router.post("/placeorder", authMiddleware, placeOrderController)

router.post('/orderStatus/:id', adminMiddleware, orderStatusController)

module.exports = router;