const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongooseChase');
const Test = mongoose.model('Test', mongoose.Schema({test: Number}));
new Test({test: 1}).save().finally(process.exit);
