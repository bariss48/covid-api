const https = require('https');

function get_data(){
    
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



}


