## The demo Realtime video stream by NodeJs

### 1. Intall

~~~bash
npm install
~~~

### 2. Run

~~~bash
node app.js

or

nodemon app.js
~~~

### 3. Code

~~~javascript
var express = require('express'); // Create an express object
var fs = require('fs'); // Create a file stream object

const port = 3000; // Define a web port
const app = express(); // Define an express app

// Handling a comming request
app.get('/', (req, res) => {
    // Set Content-Type respond object
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    // Reading video file
    let rs = fs.createReadStream('movies/He_thong_kinh_lac.mp4');
    // Responding video stream
    rs.pipe(res);
});

// Start app and listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
~~~
