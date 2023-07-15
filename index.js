const express = require('express');
require('dotenv').config();
const app = express();
app.use();
app.use(express.json());
const lineIntersectionRoute= require('./src/routes/lineIntersection.route');

const PORT = process.env.PORT;
app.use('/',lineIntersectionRoute);
app.listen(PORT, () => {
	console.log(`The Application has started on PORT: ${PORT}`);
});