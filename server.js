const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const mongoose = require('mongoose');
const app = require('./app')

mongoose.connect(process.env.DATABASE_SERVER,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'));


app.listen(process.env.PORT, () => {
    console.log(`App is runnong on ${process.env.PORT} ...`);
})