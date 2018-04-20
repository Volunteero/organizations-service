const express = require('express');
const organizationRoutes = require('./routes/organization-router');

const app = express();

let env = process.env.NODE_ENV || 'development';

let config = require('./config/env')[env];

require('./config/database')(config);

app.use('/organizations', organizationRoutes);


app.listen(config.port, () => {
    console.log(`Listening to: http://localhost:${config.port}`)
});
