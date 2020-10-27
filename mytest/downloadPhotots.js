const util = require("util");
const fs = require("fs");
const streamPipeline = util.promisify(require("stream").pipeline);
const fetch = require("node-fetch");
const { urlencoded } = require("express");

// let url =
//   "https://images.unsplash.com/photo-1598528738936-c50861cc75a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max";

// downloadImg(url, "01.png");

async function downloadImg(url, path) {
  const response = await fetch(url);

  if (response.ok) {
    return streamPipeline(
      response.body,
      fs.createWriteStream("./public/imgs/" + path)
    );
  }

  throw new Error(`unexpected response ${response.statusText}`);
}
const waitOne = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log(param);
      resolve("wait one");
    }, 1000);
  });
};

const forLoop = async () => {
  let i = 501;
  let lastUrl = "";

  while (i < 650) {
    let data = await fetch("https://source.unsplash.com/random");
    let { url } = data;

    if (!isEqual(url, lastUrl)) {
      //start downloading this image file
      console.log(url);
      await downloadImg(url, `${i}.png`);
      lastUrl = url;
      i++;
    } else {
      //wait one sec
      await waitOne;
    }
  }
};

const isEqual = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }

  return true;
};
forLoop();
// console.log(
//   isEqual(
//     "https://images.unsplash.com/photo-1598381016572-8e59bbaf02cb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
//     "https://images.unsplash.com/photo-1598381016572-8e59bbaf02cb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
//   )
// );
