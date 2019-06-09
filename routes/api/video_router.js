const Router = require('koa-router');
const router = new Router();
const video_controller = require('./../../app/controllers/video_controller');

router.get('/videos', video_controller.getVideos);
router.post('/addvideo', video_controller.addVideo);

module.exports = router;