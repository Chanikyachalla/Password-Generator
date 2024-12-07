import express from "express"

import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const port= 3000;
const app= express();

app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '../frontend/password.html')); });
      
app.listen(port ,()=>{
    console.log(`ports listenig at port${port}`);
});