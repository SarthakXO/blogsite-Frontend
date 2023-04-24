import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const CreateBlog = () => {
  const navigate = useNavigate();

  const [blog, setBlog] = useState<any>({
    title: "",
    desc: "",
  });

  const submit = async (e: any) => {
    e.preventDefault();
    try {
      await Axios.post(`http://localhost:3001/blog/create`, blog);
      alert("new blog has been created");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  return (
    <div className="create-blog">
      <div className="header">Create your blog</div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={onChange}
          className="inputs"
          type="text"
          name="title"
          placeholder="Title"
        />
        <br></br>
        <input
          onChange={onChange}
          className="inputs"
          type="text"
          name="desc"
          placeholder="Write text here"
        />
        <br />
        <button className="btn" type="submit">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
