const express = require('express');
const app = express();

const mongoose = require('mongoose');
const news = require('./routes/news');
const bodyParser = require('body-parser');

// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Connect
mongoose.connect('mongodb://anu:anucool123@ds231537.mlab.com:31537/college-api', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(console.log('DB Connected!'))
.catch((err) => console.log('DB connect error: ', err));

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.use('/news', news);

const PORT = process.env.port || 5005;
app.listen(PORT, () => {
	console.log(`server was running at port: ${PORT}`);
});
