const foodmodel = require("../models/foodmodel")
const ordermodel = require("../models/ordermodel")

const createFoodController = async (req, res) => {
    try {
        const {
            title,
            description,
            price,
            imageUrl,
            foodTags,
            category,
            code,
            isAvailable,
            resturant,
            rating,
            ratingCount } = req.body

        if (!title || !description || !price || !resturant) {
            return res.status(404).send({
                success: false,
                message: "Please provide all fields"
            })
        }
        const newFood = new foodmodel({
            title,
            description,
            price,
            imageUrl,
            foodTags,
            category,
            code,
            isAvailable,
            resturant,
            rating,
            ratingCount
        })
        await newFood.save()
        res.status(200).send({
            success: true,
            message: "Food created Successfully",
            newFood
        })
    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error is create food API",
                error
            })
    }
}

const getAllFoodController = async (req, res) => {
    try {
        const allFood = await foodmodel.find({})
        if (!allFood) {
            return res.status(404).send({
                success: false,
                message: "Food not found"
            })
        }

        res.status(200).send({
            success: true,
            totalCount: allFood.length,
            allFood
        })
    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in getAllFood API",
                error
            })
    }
}

const getFoodByIdController = async (req, res) => {

    try {
        const foodId = req.params.id
        if (!foodId) {
            return res.status(404).send({
                success: false,
                message: "please provide ID "
            })
        }
        const Food = await foodmodel.findById(foodId)
        if (!Food) {
            return res.status(404).send({
                success: false,
                message: "Food with that ID not Found"
            })
        }

        res.status(200).send({
            success: true,
            Food
        })

    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in getAllFoodByID API",
                error
            })
    }
}
//get food by resto
const getFoodByResturantController = async (req, res) => {

    try {
        const resturantId = req.params.id
        if (!resturantId) {
            return res.status(404).send({
                success: false,
                message: "please provide resto  ID "
            })
        }
        const Food = await foodmodel.find({ resturant: resturantId })
        if (!Food) {
            return res.status(404).send({
                success: false,
                message: "Food with that ID not Found"
            })
        }

        res.status(200).send({
            success: true,
            message: "food based on resturant",
            Food
        })

    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in getAllFoodByresturant API",
                error
            })
    }
}
const updateFoodController = async (req, res) => {
    try {
        const foodId = req.params.id
        if (!foodId) {
            return res.status(404).send({
                success: false,
                message: "please provide food Id"
            })
        }
        const food = await foodmodel.findById(foodId)
        if (!food) {
            return res.status(404).send({
                success: false,
                message: "food with that id not found"
            })
        }
        const {
            title,
            description,
            price,
            imageUrl,
            foodTags,
            category,
            code,
            isAvailable,
            resturant,
            rating,
            ratingCount
        } = req.body
        const updatedFood = await foodmodel.findByIdAndUpdate(foodId, {
            title,
            description,
            price,
            imageUrl,
            foodTags,
            category,
            code,
            isAvailable,
            resturant,
            rating,
            ratingCount
        }, { new: true })
        res.status(200).send({
            success: true,
            message: "Food item was Updated"
        })
    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in update Food API",
                error
            })
    }
}

const deleteFoodController = async (req, res) => {
    try {
        const foodId = req.params.id
        if (!foodId) {
            return res.status(404).send({
                success: false,
                message: "please provide ID"
            })
        }
        const Food = await foodmodel.findByIdAndDelete(foodId)
        if (!Food) {
            return res.status(404).send({
                success: false,
                message: "Food not found"
            })
        }
        res.status(200).send({
            success: true,
            message: "Food deleted successfully"
        })

    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in deleteFood API"
            })
    }
}

const placeOrderController = async (req, res) => {
    try {
        const { cart } = req.body
        if (!cart) {
            return res.status(404).send({
                success: false,
                message: "please add food cart and payment"
            })
        }
        let total = 0;
        cart.map((i) => {
            total += i.price
        })

        const newOrder = new ordermodel({
            food: cart,
            payment: total,
            buyer: req.body.id
        })
        await newOrder.save();
        res.status(200).send({
            success: true,
            message: "order placed successfullly",
            newOrder
        })
    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in placeOrder API",
                error
            })

    }
}

const orderStatusController = async (req, res) => {

    try {
        const orderId = req.params.id
        if (!orderId) {
            return res.status(404).send({
                success: false,
                message: "OrderId not found"
            })
        }
        const { status } = req.body
        const order = await ordermodel.findByIdAndUpdate(orderId, { status }, { new: true })
        res.status(200).send({
            success: true,
            message: "Order Status Updated"
        })
    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in OrderStatus API",
                error
            })
    }
}

module.exports = { createFoodController, getAllFoodController, getFoodByIdController, getFoodByResturantController, updateFoodController, deleteFoodController, placeOrderController, orderStatusController }