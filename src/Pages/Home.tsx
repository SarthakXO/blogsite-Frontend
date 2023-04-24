import React, { useEffect, useState } from "react";
import Axios from "axios";
interface Value {
  title: String;
  desc: String;
}

const Home = () => {
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await Axios.get("http://localhost:3001/blog/show");
      setBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  return blogs.map((value: Value, idx: number) => {
    return (
      <div className="App" key={idx}>
        <div className="main">
          <div className="blogShow">
            <h4 className="blogTitle">{value.title}</h4>
            <div className="blogDesc">{value.desc}</div>
          </div>
        </div>
      </div>
    );
  });
};

export default Home;
