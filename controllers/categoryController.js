const categorymodel = require("../models/categorymodel")

const createCatController = async (req, res) => {
    try {
        const { title, imageUrl } = req.body
        if (!title) {
            return res.status(404).send({
                success: false,
                message: "Provide title "
            })
        }

        const newCategory = new categorymodel({ title, imageUrl })
        await newCategory.save()
        res.status(200).send({
            success: true,
            message: "New Category has been Created",
            newCategory
        })


    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in create Category API",
                error
            })
    }
}

//getALl
const getAllCatController = async (req, res) => {
    try {
        const categories = await categorymodel.find({})
        if (!categories) {
            res.status(404).send({
                success: false,
                message: "No categories found"
            })
        }

        res.status(200).send({
            success: true,
            totalCat: categories.length,
            categories
        })
    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in getAll API"
            })
    }
}

//updatecat
const updatecatController = async (req, res) => {
    try {
        const { id } = req.params
        const { title, imageUrl } = req.body
        const updatedCategory = await categorymodel.findByIdAndUpdate(id, { title, imageUrl }, { new: true })

        if (!updatedCategory) {
            return res.status(500).send({
                success: false,
                message: "No category found"
            })
        }
        res.status(200).send({
            success: true,
            message: "category updated Successfully"
        })
    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in updatecat API"
            })
    }
}

const deleteCatController = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "please provide id"
            })
        }
        const category = await categorymodel.findById(id)
        if (!category) {
            res.status(500).send({
                success: false,
                message: "No category found with this id"
            })
        }

        await categorymodel.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "category deleted successfully"
        })
    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: "Error in deleteCat API",
                error
            })
    }
}

module.exports = { createCatController, getAllCatController, updatecatController, deleteCatController }