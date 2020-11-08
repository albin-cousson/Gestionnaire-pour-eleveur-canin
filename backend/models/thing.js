const mongoose = require('mongoose')

const Thing = mongoose.Schema(
    {
        chien: {type: String, required: true},
        jour: {type: String, required: true},
        propre: {type: Boolean, required: false},
    }
)

module.exports = mongoose.model("Thing", Thing)