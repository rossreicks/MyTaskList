var mongoose = require('mongoose')

module.exports = mongoose.model('Task', {
    text: String,
    isDone: Boolean
});