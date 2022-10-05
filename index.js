const express = require('express');
const { Server } = require('http');


const app =express();

app.get('/', (req,res) => res.send('funcionando'));


app.listen(3000);
console.log('server on port'+3000);