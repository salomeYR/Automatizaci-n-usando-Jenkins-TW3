const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        const url = process.env.MONGO_URI || 'mongodb://localhost:27017/iudigital';
        await mongoose.connect(url);
        console.log('DB connection successful');
    } catch (error) {
        console.error('DB connection failed', error);
        process.exit(1);
    }
}

module.exports = {
    getConnection,
};
