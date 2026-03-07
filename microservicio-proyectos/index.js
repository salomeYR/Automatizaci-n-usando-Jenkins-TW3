require('dotenv').config();
const app = require('./app');
const { getConnection } = require('./config/db');

const port = process.env.PORT || 4001;

getConnection();

app.listen(port, () => {
    console.log(`Microservice is running on port ${port}`);
});
