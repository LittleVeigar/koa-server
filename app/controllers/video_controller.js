const uuidv1 = require('uuid/v1');
const Video_col = require('./../models/video');
const formatDate = require('../utils/formatDate');

// 获取所有课程
const getVideos = async(ctx, next) => {
    const req = ctx.request.body;

    const videos = await Video_col.find({
        name: req.name
    }, {
        _id: 0
    });

    if (videos) {
        ctx.status = 200;
        ctx.body = {
            code: 1,
            data: videos
        }
    } else {
        ctx.status = 200;
        ctx.body = {
            code: 0,
            msg: '参数错误！'
        }
    }
}


// 添加视频
const addVideo = async(ctx, next) => {
    const uuid = uuidv1();
    let req = ctx.request.body;
    ctx.status = 200;

    if (!req.name || !req.src) {
        ctx.body = {
            code: 0,
            msg: '缺少必要参数！'
        }
        return;
    }

    req.id = uuid;
    const result = await Video_col.create(req);

    if (result) {
        ctx.body = {
            code: 1,
            msg: '发布成功！'
        }
    } else {
        ctx.body = {
            code: 0,
            msg: '发布失败！'
        }
    }
}


module.exports = {
    getVideos,
    addVideo
}