'use strict';

// 本节只需要使用到 video (video: true).
const mediaStreamConstraints = {
    video: true
};

// 用于播放视频流stream 的 video元素.
const localVideo = document.querySelector('video');

// Local stream that will be reproduced on the video.
let localStream;

// success 处理函数;  by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
    localStream = mediaStream;
    localVideo.srcObject = mediaStream;
}

// error 处理函数;  将 error 信息打印到 console.
function handleLocalMediaStreamError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

// 初始化 media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
