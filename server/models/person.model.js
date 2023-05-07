const mongoose = require('mongoose'); //must require Mongoose anywhere use

//creating our Customer Relationship Management (CRM) software by making a new model named Person
const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Person', PersonSchema);