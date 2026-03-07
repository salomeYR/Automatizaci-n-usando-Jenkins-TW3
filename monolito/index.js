require('dotenv').config();
const app = require('./app');
const { getConnection } = require('./config/db');

const port = process.env.PORT || 4000;

getConnection();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
