// server.js
//entry point for api
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/products', (req, res) => {
    res.send('API is running...');
})

console.log(process.env.MONGO_URI);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//mongodb+srv://termainejenkins:<db_password>@cluster0.kictq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0