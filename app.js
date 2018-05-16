var express = require('express');
var fs = require('fs');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    let rs = fs.createReadStream('movies/He_thong_kinh_lac.mp4');
    rs.pipe(res);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});