import "./App.css";

import React from "react";

import data from "./data";
import LazyLoad from "react-lazyload";

//https://github.com/twobin/react-lazyload

const Loading = () => (
  <div>
    <h1>Loading...</h1>
  </div>
);

const Post = ({ id, title, body }) => (
  <div>
    <LazyLoad
      once={true}
      placeholder={
        <img src={`https://picsum.photos/id/${id}/200/200`} alt="..." />
      }
    >
      <div>
        <img src={`https://picsum.photos/id/${id}/200/200`} alt="..." />
      </div>
    </LazyLoad>
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </div>
);
function App() {
  return (
    <div className="App">
      <h2>Lazyload demo</h2>
      <div>
        {data.map((post) => (
          <LazyLoad
            key={post.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<Loading />}
          >
            <Post key={post.id} {...post} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default App;
