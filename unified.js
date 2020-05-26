const mongoose = require('mongoose');
const opts = {useUnifiedTopology: true};
mongoose.connect('mongodb://localhost/mongooseChase', opts);
const Test = mongoose.model('Test', mongoose.Schema({test: Number}));
new Test({test: 1}).save().finally(process.exit);
