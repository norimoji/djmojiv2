const mongoose = require ('mongoose')

const setupString = {
    type: String,
    required: true
}

const schema = mongoose.Schema({
    _channelId: setupString,
    _userId: setupString,
    option: setupString
})

module.exports = mongoose.model('setup-intro',schema)