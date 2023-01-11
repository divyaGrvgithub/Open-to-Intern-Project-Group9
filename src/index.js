const express = require('express');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://divyamala_:Dt25042000knp@divyamala.0cofsch.mongodb.net/groupXDatabase", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(
    function (req, res, next) {
        console.log("inside GLOBAL MW");
        next();
    }
);

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
