const mongoose = require ('mongoose')

const setupString = {
    type: String,
    required: true
}

const setupNumber = {
    type: Number,
    require: true
}

const schema = mongoose.Schema({
    _channelId: setupString,
    _userId: setupString,
    option: setupNumber
})

module.exports = mongoose.model('setup-intro',schema)