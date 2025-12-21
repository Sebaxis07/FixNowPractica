import express from "express";
const app = express();


const PORT = process.env.PORT || 3000;

//Routing
app.get('/', (req, res) => {
    res.send('Hola')
})

app.get('/Ejemplo', (req, res) => {
    res.send('ejemplo')
})
app.get('/type', (req, res) => {
    res.send('typescript')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});