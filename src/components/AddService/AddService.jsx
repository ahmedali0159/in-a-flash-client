import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddBlog.css'

export default function AddBlog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageUrl] = useState(null)


  const onSubmit = (data) =>{
    const eventData = {
      name:data.title,
      imageURL: imageURL,
      content: data.content
    };
     const url = (`http://localhost:3000/`);
     console.log(eventData);
     fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
      
     })
     .then(res => console.log('server side response', res));
     
  };

  const handleImageUpload = event => {
    const imageData = new FormData();
    imageData.set('key', '2fe3314a2f7addd3a2ccb60181f3f015')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData )
    .then(function (response) {
      setImageUrl(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="main">
      <h1 className="text-center mb-5">Add Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          name="name"
          placeholder="Enter a Title"
          {...register("title")}
        />
        <br />
        <textarea
          className="form-control"
          rows="3"
          name="price"
          placeholder="Enter a Content"
          {...register("content")}
        />
        <br />
        <input
          className="form-control"
          name="exampleRequired"
          type="file"
          placeholder="Add Cover Image"
          onChange={handleImageUpload}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <br />
        <input className="btn btn-rounded" style={{background:'#5352ed', border:'1px solid #5352ed', color:'black'}} value="Submit" type="submit" />
      </form>
    </div>
  );
}