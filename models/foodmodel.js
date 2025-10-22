const mongoose = require('mongoose')

//schema
const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Food title is required"]
    },
    description: {
        type: String,
        required: [true, "Food description is needed"]
    },
    price: {
        type: Number,
        required: [true, "Food price is required"]
    },
    imageUrl: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Ffood-logo&psig=AOvVaw12M__DqkRbWacwsqtsQNxA&ust=1760661047177000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDO2dy7p5ADFQAAAAAdAAAAABAE"
    },
    foodTags: {
        type: String
    },
    category: {
        type: String
    },
    code: {
        type: String
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    resturant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resturant'
    },
    rating: {
        type: Number,
        default: 5,
        min: 1,
        max: 5
    },
    ratingCount: {
        type: String
    }

}, { timestamps: true })

//export

module.exports = mongoose.model('food', foodSchema);