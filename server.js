const Bundler = require('parcel-bundler'),
    express = require('express'),
    mongoose = require('mongoose');

const bundler = new Bundler('./public/index.html', {});

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/react-sample').then(() => {
    console.log('Connected to the DB');
}).catch(err => {
    console.error(err);
    process.exit(-1);
});

app.use('/api/messages', require('./app/routes/message.server.routes'));

//Add router moiddeleware
app.use('/server/course', require('./app/routes/course.route'))
app.use('/server/subject', require('./app/routes/subject.route'))

app.use(bundler.middleware());

app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile('./dist/index.html');
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Application is running on port 3000');
});

