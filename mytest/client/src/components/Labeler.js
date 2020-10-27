import React, { useEffect, useState } from "react";
import Request from "../helper/Request";
import JsonP from "jsonp";
import fetch from "node-fetch";

function Labeler(props) {
  let [imgUrl, setImgUrl] = useState("");
  let [pointer, setPointer] = useState(-1);
  let [cachedImgs, setCachedImgs] = useState([]);

  let urls = [
    "https://images.unsplash.com/photo-1598501779229-f39d98581130?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2NjQxM30",
    "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600254105410&di=4bf1e57a3f65104ddb23fabd23466e45&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F14%2F28%2F01300000407359124447284630600.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600254105410&di=2a4b38ee41d39b373998e0f906636a78&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg",
  ];
  // let urls = ['1','2','3','4','5','6'];
  const goBack = () => {
    if (pointer > 0) {
      setPointer(pointer - 1);
    }
  };
  useEffect(() => {
    if (cachedImgs.length > 0) {
      setPointer(cachedImgs.length - 1);
    }
  }, [cachedImgs]);
  let img;

  const goNext = async () => {
    // cachedImgs.push("/photos/random");
    //https://source.unsplash.com/random
    // fetch('https://api.unsplash.com/photos/random?client_id=veIQlP1Vb6slQvwsUAyTt2sHvbG9aG5rWjTBTdYMlHU')
    //     .then(res => res.text())
    //     .then(body => {

    //         console.log(JSON.parse(body));

    //         sequeeze(cachedImgs, JSON.parse(body));
    //     } );
    // consiole.log(urls[Math.floor(Math.random()*7)%3]);
    // let data = await fetch(
    //   "https://api.unsplash.com/photos/random?client_id=veIQlP1Vb6slQvwsUAyTt2sHvbG9aG5rWjTBTdYMlHU"
    // );
    // console.log(data);

    let index = Math.floor(Math.random() * 500);
    let url = `/photos/${index}`;
    console.log(url);
    if (cachedImgs.length === 0) {
      setCachedImgs([url]);
    } else if (cachedImgs.length < 10) {
      setCachedImgs([...cachedImgs, url]);
      // setPointer(pointer+1);
    } else {
      const newCachedImgs = [...cachedImgs, url];
      newCachedImgs.shift();
      setCachedImgs(newCachedImgs);
    }
  };

  return (
    <div>
      <p>Does this image contain {props.categoryName}?</p>

      <p>img pointing: {pointer}</p>
      {/* <Image url={imgUrl}></Image> */}
      <div>
        {cachedImgs.map((item, i) => (
          <img
            src={item}
            key={i}
            style={{
              display: i !== pointer ? "none" : "block",
              height: "80vh",
            }}
          />
        ))}
      </div>
      {img}
      <div>
        <button onClick={goBack}>last</button>
        <button onClick={goNext}>get Random</button>
        <span>{pointer}</span>
      </div>
    </div>
  );
}

function Image(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        style={{ width: "50px" }}
        src={props.url}
        referrerPolicy={"no-referrer"}
      ></img>
    </div>
  );
}

export default Labeler;
