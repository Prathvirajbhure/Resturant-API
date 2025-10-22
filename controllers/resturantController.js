const resturantModel = require("../models/resturantModel");
const Resturant = require("../models/resturantModel");
const resturantController = async (req, res) => {
    try {
        const {
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            code,
            coords
        } = req.body

        //validation
        if (!title || !coords) {
            return res.status(500).send({
                success: false,
                message: "please provide title and address"
            })
        }

        //create
        const newResturant = new Resturant({
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            code,
            coords,
        });

        await newResturant.save();

        res.status(201).send({
            success: true,
            message: "New Resturant is created Successfully",
            resturant: newResturant,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in create resturant API",
            error
        })
    }
}

//Get all resturant 
const getAllResturantController = async (req, res) => {
    try {
        const resturants = await resturantModel.find({})

        //validation
        if (!resturants) {
            return res.status(404).send({
                success: false,
                message: "Resturant not found"
            })
        }
        res.status(200).send({
            success: true,
            totalCount: resturants.length,
            resturants
        })

    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in getAllResturant API",
                error
            })
    }
}

const getResturantById = async (req, res) => {
    try {

        const resturantId = req.params.id
        if (!resturantId) {
            return res.status(404).send({
                success: false,
                message: "Please Provide Resturant ID"
            })
        }
        //find resto
        const resturant = await resturantModel.findById(resturantId)
        //validation
        if (!resturant) {
            return res.status(404).send({
                success: false,
                message: "no resto found"
            })
        }
        res.status(200).send({
            success: true,
            resturant
        })

    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in getAllResturantById API",
                error
            })
    }
}

//Delete Resturant
const deleteResturantController = async (req, res) => {
    try {
        const resturantId = req.params.id
        if (!resturantId) {
            return res.status(404).send({
                success: false,
                message: "No Resturant Found or provide Id"
            })
        }

        await resturantModel.findByIdAndDelete(resturantId)
        res.status(200).send({
            success: true,
            message: "Resturant deleted successfully"
        })



    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in Delete Resturant API",
                error
            })
    }
}

module.exports = { resturantController, getAllResturantController, getResturantById, deleteResturantController };