const express = require('express');
const cors = require('cors');

const messagesRouter = require('./routers/messagesRoute');
const sequelize = require('./db/sequelize');
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(messagesRouter);

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log("Server conected, port:", port);
        });
    })
    .catch(err => console.log(err));





