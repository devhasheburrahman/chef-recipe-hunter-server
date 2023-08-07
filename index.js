const express = require('express');
const cors = require('cors')
const chefData = require('./chef.json');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors())

app.get("/", (req, res) => {
    res.json({ message: "hello server is running" })
})

app.get('/chef', (req, res) => {
    res.json(require('./chef.json'))
})



app.get("/chef/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);


    const details = chefData.filter((d) => d.id == id);
    console.log(details);
    res.send(details[0]);
});

app.listen(5000, () => {
    console.log("server is running port 5000");
})


app.get("/:id", (req, res) => {
    const id = req.params.id;

    const details = chefData.filter((d) => d.id == id);
    res.send(details);
});