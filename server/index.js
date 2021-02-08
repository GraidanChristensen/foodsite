require('dotenv').config();
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;

const express = require('express');
const massive = require('massive');
const session = require('express-session');

const app = express();

const path = require('path')


app.use(express.static(`${__dirname}/../build`))
app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('connected to db')
}).catch( err => console.log(err));




app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  })
  
  app.listen(SERVER_PORT, ()=>console.log(`Listening on ${SERVER_PORT}`));