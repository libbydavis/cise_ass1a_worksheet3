// db.js
const mongoose = require('mongoose');
const db = 'mongodb+srv://adminlibby:wxnIXG4%24%23ZW5@cluster1.lgf8u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(
            db,
            {
                useNewUrlParser: true
            }
        );

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
