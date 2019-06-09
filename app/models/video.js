const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SchoolSchema = new Schema({
    id: {
        type: String,
        unique: true,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    src: {
        type: String,
        require: true
    }
}, {
    collection: 'video',
    versionKey: false
});

module.exports = mongoose.model('video', SchoolSchema);