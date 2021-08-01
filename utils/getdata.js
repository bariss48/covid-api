const https = require('https');
const express = require('express');
const router = express.Router();

    const apiUrl = 'https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json';

    let data = '';
    
    https.get(apiUrl,res => {
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            data = JSON.parse(data);
            //console.log(data);
            console.log(data);
          })
        }).on('error', err => {
          console.log(err.message);
    })


router.get("/covid/api", (req,res) => {
    res.send(data);
});

module.exports = router,data;