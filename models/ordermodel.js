const mongoose = require('mongoose')

//schema
const orderSchema = new mongoose.Schema({
    foods: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Foods'
        }
    ],
    payment: {},
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ["Preparing", "prepare", "on the way", "delivered"],
        default: "Preparing"
    }
}, { timestamps: true })

//export

module.exports = mongoose.model('order', orderSchema);