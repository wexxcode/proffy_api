import express from 'express';

const app = express();

app.use(express.json());


app.get('/', (request, response) => {
    console.log(request.query);

    return response.json({ message: 'Hello Word'});
});

app.listen(3000);