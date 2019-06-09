const Koa = require('koa');
const config = require('./config');

// https://www.npmjs.com/package/koa2-cors
const cors = require('koa2-cors');

// https://www.npmjs.com/package/koa-bodyparser
const bodyParser = require('koa-bodyparser');

// https://github.com/Automattic/mongoose
const mongoose = require('mongoose');

const app = new Koa();

mongoose.connect(config.db, {
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.error('Failed to connect to database');
    } else {
        console.log('Connecting database successfully');
    }
});

app.use(cors());
app.use(bodyParser());

const video_router = require('./routes/api/video_router');

app.use(video_router.routes()).use(video_router.allowedMethods());

app.listen(config.port);