
const express = require('express');
const app = express();
app.use(express.json());

const LinkUrl = 
        {
            id: 0,
            url: "URL",
            time: "Time",
            nameVideo: "Name",
            status:"True"
        }
    

app.get('/', (req, res) => {
    res.send(LinkUrl);
});


const port = process.env.PORT || 3030
app.listen(port,'0.0.0.0' );