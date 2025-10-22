const mongoose = require('mongoose')

//schema
const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "category title is required"]
    },
    imageUrl: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Ffood-logo&psig=AOvVaw12M__DqkRbWacwsqtsQNxA&ust=1760661047177000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDO2dy7p5ADFQAAAAAdAAAAABAE"
    },



}, { timestamps: true })

//export

module.exports = mongoose.model('category', categorySchema);